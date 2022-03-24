const router = require('express').Router()
const { sendData, saveToWaitlist } = require('../controller/sendData')


router.get('/sample', sendData)

/**
 * @swagger
 * /api/waitlist:
 *   post:
 *     description: Store a client's email into the waitlist
 *     parameters:
 *       - name: email
 *         description: Client's email address
 *         in: body
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses: 
 *       200:
 *         description: Success
 *       400:
 *         description: Email parameter is missing
 */
router.post("/waitlist", saveToWaitlist)

module.exports = router