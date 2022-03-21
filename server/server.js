const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { addToWaitlist } = require('./spreadsheet');
const app = express();
const cors = require('cors')

app.use(cors());

// Config for API documentation
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

// Serve documentation for API endpoints on /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())

// TODO: Remove when a frontend view for the landing page is available
app.get('/', (req, res) => {
    res.sendFile('src/index.html', { root: __dirname })
    console.log("User connected")
})

/**
 * @swagger
 * /api/waitlist:
 *   post:
 *     description: Store a client's email into the waitlist
 *     parameters:
 *       - name: email
 *         description: Client's email address
 *         in: formData
 *         required: true
 *         type: string
 *     responses: 
 *       200:
 *         description: Success
 *       400:
 *         description: Email parameter is missing
 */
app.post("/api/waitlist", (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.status(400).send("email parameter is required");
        return;
    }

    addToWaitlist(email);
    console.log(`Client ${email} added to waitlist`);
    res.status(201).send(`Added ${email} to waitlist`)
})

