const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config()

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

async function addToWaitlist(email, name = "") {
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['Waitlist']

    sheet.addRow({
        "Email": email,
        "Name": name
    })

}

exports.addToWaitlist = addToWaitlist;


