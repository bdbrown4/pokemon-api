// Initialize express router
const router = require('express').Router();

/**
   * @swagger
   * /ping:
   *   get:
   *     tags:
   *       - Ping
   *     description: Ping to check if API is operational
   *     responses:
   *       200:
   *         description: API is operational.
 *         schema:
 *           $ref: '#/definitions/Ping'
 *         headers:
 *            Access-Control-Allow-Origin:
 *              type: string
   */
  router.get('/ping', function (_req, _res) {
    _res.json({
        status: 'API is operational.',
        message: 'Welcome to Pokemon Center API! We will transport and retrieve all your pokemon and items!'
    });
});

// Export API routes
module.exports = router;