const express = require('express');
const { addToWaitlist } = require('./spreadsheet');
const app = express();


app.listen(9000, () =>
    console.log("Listening on port 9000")
)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile('src/index.html', { root: __dirname })
    console.log("User connected")
})

app.post("/api/waitlist", (req, res) => {
    const email = req.body.email;
    addToWaitlist(email);
    console.log(`Client ${email} added to waitlist`);
})

