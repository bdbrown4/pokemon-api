// Initialize express router
const router = require('express').Router();
// // Import pokemon controller
const pokemonController = require('../controllers/pokemon.controller');
// Set default API response
router.get('/', function (_req, _res) {
    _res.json({
        status: 'API is operational.',
        message: 'Welcome to Pokemon Center API! We will transport and retrieve all your pokemon and items!'
    });
});
// Pokemon routes
router.route('/pokemon/retrievePokemon').get(pokemonController.retrievePokemon);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

// Export API routes
module.exports = router;