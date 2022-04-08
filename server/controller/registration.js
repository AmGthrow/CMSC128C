const User = require('../model/userSchema')


exports.registration = async function (req, res) {
    
    const {username, password} = req.body 


    // check validity of input: if not then redirect to a certain page
    
    // create new User
    const newUser = new User({username, password})
        
    // save the created transaction data to the database
    const {error} = await newUser.save()


    if(!error) return res.send('ok') // this must be a redirect command ex/ res.redirect('/dashboard');

    res.send('ok')
}