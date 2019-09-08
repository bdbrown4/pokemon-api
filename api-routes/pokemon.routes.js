// Initialize express router
const router = require('express').Router();
// // Import pokemon controller
const pokemonController = require('../controllers/pokemon.controller');
// Set default API response

/**
* @swagger
* /:
*    get:
*      description: Ping to test if API is operational
*/
router.get('/', function (_req, _res) {
    _res.json({
        status: 'API is operational.',
        message: 'Welcome to Pokemon Center API! We will transport and retrieve all your pokemon and items!'
    });
});
// Pokemon routes

/**
* @swagger
* /pokemon/retrievePokemon:
*    get:
*      description: This should return all pokemon
*/
router.route('/pokemon/retrievePokemon').get(pokemonController.retrievePokemon);
router.route('/pokemon/retrievePokemon/:name').get(pokemonController.retrievePokemonByName);
router.route('/pokemon/addPokemon').post(pokemonController.addPokemon);

// Export API routes
module.exports = router;