const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { addToWaitlist } = require('./spreadsheet');
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Codercademy API',
            'version': '1.0.0'
        }
    },
    apis: ['server.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.listen(9000, () =>
    console.log("Listening on port 9000")
)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())

// TODO: Remove when a frontend view for the landing page is available
app.get('/', (req, res) => {
    res.sendFile('src/index.html', { root: __dirname })
    console.log("User connected")
})

app.post("/api/waitlist", (req, res) => {
    const email = req.body.email;
    addToWaitlist(email);
    console.log(`Client ${email} added to waitlist`);
    res.sendStatus(201);
})

