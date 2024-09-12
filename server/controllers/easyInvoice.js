const PdfPrinter = require('pdfmake');
const fs = require('fs');

const fonts = {
    Roboto: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    }
};

const printer = new PdfPrinter(fonts);

function generateInvoice(customerName, selectedServices, filePath) {
    if (!filePath) {
        throw new Error('File path must be provided');
    }

    // Debugging: Log selected services
    console.log('Selected Services:', selectedServices);

    // Map selectedServices to create rows for the table
    const items = selectedServices.map(service => [
        service.name || 'N/A',
        service.staff || 'N/A',
        service.price !== undefined ? `₹${service.price.toFixed(2)}` : 'N/A'
    ]);

    // Calculate total price
    const totalPrice = selectedServices.reduce((total, service) => total + (service.price || 0), 0);

    const docDefinition = {
        content: [
            {
                text: 'Salon Invoice',
                style: 'header'
            },
            {
                columns: [
                    {
                        text: `Customer: ${customerName}`,
                        style: 'customerDetails'
                    },
                    {
                        text: `Date: ${new Date().toLocaleDateString()}`,
                        style: 'date'
                    }
                ],
                columnGap: 20
            },
            {
                text: 'Services',
                style: 'sectionHeader'
            },
            {
                table: {
                    headerRows: 1,
                    widths: [ '*', '*', 'auto' ],
                    body: [
                        [
                            { text: 'Service', style: 'tableHeader' },
                            { text: 'Staff', style: 'tableHeader' },
                            { text: 'Price', style: 'tableHeader' }
                        ],
                        ...items,
                        [{ text: 'Total', colSpan: 2, style: 'tableFooter' }, {}, `₹${totalPrice.toFixed(2)}`]
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            {
                text: 'Thank you for visiting our salon!',
                style: 'footer'
            }
        ],
        styles: {
            header: {
                fontSize: 26,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 20]
            },
            customerDetails: {
                fontSize: 14,
                margin: [0, 0, 0, 10]
            },
            date: {
                fontSize: 14,
                alignment: 'right',
                margin: [0, 0, 0, 10]
            },
            sectionHeader: {
                fontSize: 18,
                bold: true,
                margin: [0, 20, 0, 10]
            },
            tableHeader: {
                fillColor: '#f0f0f0',
                bold: true,
                fontSize: 12,
                alignment: 'center',
                padding: [5, 10]
            },
            tableFooter: {
                bold: true,
                fontSize: 12,
                alignment: 'right',
                padding: [5, 10]
            },
            footer: {
                fontSize: 12,
                italics: true,
                alignment: 'center',
                margin: [0, 20, 0, 0]
            }
        },
        defaultStyle: {
            font: 'Roboto'
        }
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.end();
}

module.exports = { generateInvoice };
