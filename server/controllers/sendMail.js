const nodemailer = require("nodemailer");
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(toUserEmail, subject, text, html, attachmentPath) {
    if (!attachmentPath) {
        throw new Error('Attachment path must be provided');
    }

    let attachment;
    try {
        attachment = fs.readFileSync(attachmentPath);
    } catch (error) {
        console.error(`Failed to read file at path: ${attachmentPath}`);
        throw error;
    }

    const info = await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: [process.env.EMAIL, toUserEmail].join(', '), // list of receivers (you and the user)
        subject, // Subject line
        text, // plain text body
        html, // html body
        attachments: [
            {
                filename: path.basename(attachmentPath), // Use basename for filename
                content: attachment,
                encoding: 'base64',
            },
        ]
    });

    console.log("Message sent: %s", info.messageId);
}

module.exports = { sendMail };
