const User = require('../model/userSchema')
const bcrypt = require('bcrypt')

/*
TODO: 
    alter the code! 
        use try and catch block or .then() and .catch() 
 */

async function generateHash(password) {

    // generate salt
    const salt = await bcrypt.genSalt(14)

    // hash password
    return await bcrypt.hash(password, salt)
}


exports.registration = async function (req, res) {
    
    const {username, password} = req.body 

    /* check validity of input: if not then redirect to a certain page */

    // check if username exists already!
    const userExists = await User.exists({ username: username})

    if(userExists) return res.status(409).json({error: 'username already exists'}) // should we return this?
    
    // hash the password first!
    const hash = await generateHash(password)

    // create user!
    const newUser = new User({username, password: hash}) 
    
    const {error} = await newUser.save() // save the created transaction data to the database

    // something happened to database!
    if(error) return res.status(500).json({error: error.message}) // should we return this?

    // successfully save to database!
    return res.status(200).json({message: 'registered successfully'}) // should we return this? 
}

