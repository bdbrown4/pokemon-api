// Initialize express router
const router = require('express').Router();
// // Import pokemon controller
const pokemonController = require('../controllers/pokemon.controller');
// Set default API response

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
 *       attackPower:
 *         type: number
 *       combatPower:
 *         type: number
 *       defense:
 *         type: number
 *       hp:
 *          type: number
 *       attackMoves:
 *          type: object
 *          $ref: '#/definitions/AttackMoves'
 * 
 *   AttackMoves:
 *     properties:
 *       fastMove:
 *          type: string
 *       chargedMove:
 *          type: string
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
/**
* @swagger
* /pokemon/addPokemon:
*   post:
*     parameters:
*        - in: body
*          name: pokemon
*          description: The pokemon description you need to add
*          schema:
*            $ref: '#/definitions/Pokemon'  
*     tags:
*       - Pokemon
*     description: Adds a Pokemon with all the required fields
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
router.route('/pokemon/addPokemon').post(pokemonController.addPokemon);

// Export API routes
module.exports = router;