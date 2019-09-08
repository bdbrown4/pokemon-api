const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Pokemon Storage Center API',
      version: '1.0.0',
      description: 'Pokemon Storage Center allows for trainers to store and retrieve Pokemon and items!',
    },
    host: `http://${process.env.IP || 'localhost'}:${process.env.PORT || 8080}`,
    baseRoute: '/api'
  },
  apis: ['../api-routes/pokemon.routes.js']
};

module.exports = specs = swaggerJsdoc(options);