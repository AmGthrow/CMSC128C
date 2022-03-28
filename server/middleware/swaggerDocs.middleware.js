const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

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

exports.swaggerServe = swaggerUi.serve;
exports.swaggerSetup = swaggerUi.setup(swaggerDocs);