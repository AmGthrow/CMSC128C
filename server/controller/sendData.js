// require from the model
const { addToWaitlist } = require('../database/spreadsheet');

exports.sendData = async function (req, res, next) {
    res.send({ 'message': 'ok' })
}

exports.saveToWaitlist = (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.status(400).send("email parameter is required");
        return;
    }

    addToWaitlist(email);
    console.log(`Client ${email} added to waitlist`);
    res.status(201).send(`Added ${email} to waitlist`)
}