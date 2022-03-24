require('dotenv').config({ path: '.env' })
const cors = require('cors')
const router = require('./route/router')
const express = require('express')

/* *set up app */
const app = express()

/* set up port */
const port = process.env.PORT || 8000

/* configure app */
app.use(cors({ origin: '*' }))  //temporary: let any url to access this port 
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use('/api', router) // router: base

/* listen to the port */
app.listen(port, () => console.log(`Listening on port ${port}`))