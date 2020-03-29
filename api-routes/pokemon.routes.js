// Initialize express router
const router = require('express').Router();
// // Import pokemon controller
const pokemonController = require('../controllers/pokemon.controller');
// Set default API response

/**
   * @swagger
   * /:
   *   get:
   *     description: Ping to check if API is operational
   *     responses:
   *       200:
   *         description: API is operational.
 *         headers:
 *            Access-Control-Allow-Origin:
 *              type: string
   */
router.get('/', function (_req, _res) {
    _res.json({
        status: 'API is operational.',
        message: 'Welcome to Pokemon Center API! We will transport and retrieve all your pokemon and items!'
    });
});
/**
 * @swagger
 * definitions:
 *   Pokemon:
 *     properties:
 *       name:
 *         type: string
 *       gender:
 *         type: string
 *       powerType:
 *         type: string
 *       powerSubType:
 *         type: string
 */
/**
 * @swagger
 * /pokemon/retrievePokemon:
 *   get:
 *     tags:
 *       - Pokemon
 *     description: Returns all pokemon
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of pokemon
 *         schema:
 *           $ref: '#/definitions/Pokemon'
 *         headers:
 *            Access-Control-Allow-Origin:
 *              type: string
 */
router.route('/pokemon/retrievePokemon').get(pokemonController.retrievePokemon);
/**
* @swagger
* /pokemon/retrievePokemon/{pokemonName}:
*   get:
*     parameters:
*       - in: path
*         name: pokemonName
*         required: true
*     tags:
*       - Pokemon
*     description: Returns Pokemon by name
*     produces:
*       - application/json
*     responses:
*       200:
*         description: An object of a single Pokemon
*         schema:
*           $ref: '#/definitions/Pokemon'
*         headers:
*            Access-Control-Allow-Origin:
*              type: string
*/
router.route('/pokemon/retrievePokemon/:name').get(pokemonController.retrievePokemonByName);
router.route('/pokemon/addPokemon').post(pokemonController.addPokemon);

// Export API routes
module.exports = router;