const Transaction = require('../model/transactionSchema')


exports.getTransactions =  async function (req, res) {

    const { pageNo = 0, limit = 10} = req.query // default list of transaction every page : page = 0, limit = 10 

    const transactions = await Transaction.find({}).sort({ _id: 1}).limit(limit).skip(pageNo * limit).exec()  // get data

    if(!transactions) return res.json({error: 'No transactions'}) // if no return data then show error

    return res.json({ // return the data
        transactions : transactions.map(transaction => ({
            id: transaction._id,
            type: transaction.type,
            amount: transaction.amount,
            name: transaction.name
        }))
    })
 }