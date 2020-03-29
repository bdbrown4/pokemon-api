const SwaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Pokemon Storage Center API',
      version: '1.0.0',
      description: 'Pokemon Storage Center allows for trainers to store and retrieve Pokemon and items!',
    },
    host: `${process.env.IP || 'localhost'}:${process.env.PORT || 8080}/api`,
    baseRoute: ''
  },
  apis: ['**/*.routes.js']
};

module.exports = SwaggerJsdoc(options);