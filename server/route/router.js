const router = require('express').Router() 
const {sendData} =  require('../controller/sendData')


router.get('/sample', sendData)


module.exports = router