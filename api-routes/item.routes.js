// Initialize express router
const router = require('express').Router();
// // Import item controller
const itemController = require('../controllers/item.controller');

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
 *         headers:
 *            Access-Control-Allow-Origin:
 *              type: string
 *            
 */
router.route('/item/retrieveItems').get(itemController.retrieveItems);
router.route('/item/addItems').post(itemController.addItems);

// Export API routes
module.exports = router;