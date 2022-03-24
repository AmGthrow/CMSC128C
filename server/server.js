require('dotenv').config({ path: '.env' })
const cors = require('cors')
const router = require('./route/router')
const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

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
app.use(express.json())
app.use('/api', router) // router: base

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

// Serve documentation for API endpoints on /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/* listen to the port */
app.listen(port, () => console.log(`Listening on port ${port}`))