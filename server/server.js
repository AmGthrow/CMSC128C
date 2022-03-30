require('dotenv').config({ path: '.env' })
const cors = require('cors')
const router = require('./route/router')
const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// load database 
require('./database/connection')

/* *set up app */
const app = express()

/* set up port */
const port = process.env.PORT || 8000

/* configure app */
app.use(cors({ origin: '*' }))  //temporary: let any url to access this port 
app.use(
    express.urlencoded({
        extended: true
    })
)

// Config for API documentation
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Codercademy API',
            'version': '2.0.0'
        }
    },
    apis: ['./route/router.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Serve documentation for API endpoints on /api-docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())
app.use('/api', router) // router: base

/* listen to the port */
app.listen(port, () => console.log(`Listening on port ${port}`))