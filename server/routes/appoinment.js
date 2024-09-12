const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs'); // Import fs module
const { promisify } = require('util');
const sleep = promisify(setTimeout);

// require('../db/conn')
const Appoinment = require('../model/appoinmentModel');
const { sendMail } = require('../controllers/sendMail');
const { generateInvoice } = require('../controllers/easyInvoice');

router.get('/', (req, res) => {
    res.send("home router");
});

router.post('/appoinment', async (req, res) => {
    const { name, email, selectedServices, selectedSubServices, staff, date  , totalPrice} = req.body;

    if (!name || !email || ! selectedServices|| !staff || !date) {
        return res.status(422).json({ err: "Please fill all the details" });
    }

    try {
        const userExist = await Appoinment.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Appointment already exists for this email" });
        }

        const formattedSubServices = selectedSubServices.map(subService => {
            const [name, price] = subService.split(':');
            return { name, price: parseFloat(price) };
        });

        const user = new Appoinment({
            name,
            email,
            selectedServices: Array.isArray(selectedServices) ? selectedServices : [selectedServices],
            selectedSubServices: formattedSubServices,
            staff,
            date,
            totalPrice
        });

        await user.save();

        // Define the file path correctly
        const filePath = path.join(__dirname, `../invoices/invoice_${name.replace(/\s+/g, '_')}.pdf`);
console.log(`Attempting to read file at: ${filePath}`);

        
        // Generate the invoice
        await generateInvoice(name, [{ name:selectedServices,selectedSubServices, staff: staff, price:  totalPrice }], filePath);

        await sleep(1000);

        // Send the email with the invoice
        await sendMail(email, "Appointment Confirmation",
            `${name}, your appointment is booked on ${date} for service ${selectedSubServices}.`,
            `<p>${name}, your appointment is booked on ${date} for service ${selectedSubServices}.</p>`,
            filePath
        );

        res.status(201).json({ message: "Appointment booked and invoice sent" });

        // Optionally, delete the invoice file after sending
       

       


        fs.unlink(filePath, (err) => {
            if (err) console.error(`Failed to delete file: ${filePath}`, err);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
