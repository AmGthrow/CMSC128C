const express = require('express');
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

app.post("/waitlist", (req, res) => {
    const email = req.body.email;
    res.send("Thanks for signing up to our waitlist!");
    console.log(`Client ${email} added to waitlist`);
})

