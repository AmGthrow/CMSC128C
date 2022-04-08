const router = require('express').Router()
const { saveToWaitlist } = require('../controller/waitlist')
const { addTransaction } = require('../controller/addTransaction')
const { getTransactions } = require('../controller/getTransactions')
const { registration } = require('../controller/registration')

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

// USER REGISTRATION
router.post("/registration", registration)  // need to edit the route for that


// TRANSACTIONS
router.post("/add-transactions", addTransaction) // need pa sya og validation middleware

router.get("/all-transactions", getTransactions) 



module.exports = router