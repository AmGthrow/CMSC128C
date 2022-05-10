const mongoose = require('mongoose') 

const connectionParams = {
    useNewURLParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(process.env.MONGODB_URL, connectionParams) // connecting to mongo db url
        .then(() => console.log('Connected to the database'))
        .catch(error => console.log(`Database error:  ${error}`))