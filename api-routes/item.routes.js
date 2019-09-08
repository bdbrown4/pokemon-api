// Initialize express router
const router = require('express').Router();
// // Import item controller
const itemController = require('../controllers/item.controller');

/**
 * @swagger
 * definitions:
 *   Item:
 *     properties:
 *       name:
 *         type: string
/**
 * @swagger
 * /item/retrieveItems:
 *   get:
 *     tags:
 *       - Item
 *     description: Returns all items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of items
 *         schema:
 *           $ref: '#/definitions/Item'
 */
router.route('/item/retrieveItems').get(itemController.retrieveItems);
router.route('/item/addItem').post(itemController.addItem);

// Export API routes
module.exports = router;