const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Pokemon Storage Center API',
      version: '1.0.0',
      description: 'Pokemon Storage Center allows for trainers to store and retrieve Pokemon and items!',
    },
    host: `http://${process.env.IP || 'localhost'}:${process.env.PORT || 8080}`,
    baseRoute: '/api'
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['../api-routes/pokemon.routes.js']
};

module.exports = specs = swaggerJsdoc(options);