const express = require('express');
const app = express();

app.listen(9000, () =>
    console.log("Listening on port 9000")
)

// TODO: Move this to POST request
app.get("/waitlist", (req, res) => {
    res.send("Thanks for signing up to our waitlist!");
    console.log("Client added to waitlist");
})

