const Transaction = require('../model/transactionSchema')



exports.addTransaction = async function (req, res) {

    const {type, amount, name} = req.body
    
    // create new instance of the Transaction
   const newTransaction = new Transaction({type, amount, name})
    
   // save the created transaction data to the database
   const {error} = newTransaction.save()

   // sample: send ok if data is successfully save
   if(!error) {
       res.send('ok')
   }
}