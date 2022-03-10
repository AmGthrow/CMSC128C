const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('./secret.json');

const doc = new GoogleSpreadsheet('1K1EEOBOJchXKRdYmqattxaiv117uoXYY7PENbc8Ku5Q');

async function addToWaitlist(email, name = "") {
    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['Waitlist']

    sheet.addRow({
        "Email": email,
        "Name": name
    })

}

exports.addToWaitlist = addToWaitlist;


