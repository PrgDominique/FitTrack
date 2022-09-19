const express = require('express')

//controller function
const { loginUser, signupUser} = require('../Controller/usercontroller')

const router = express.Router()

//login route
router.post('/login',loginUser)

//sign-in route
router.post('/signup', signupUser)



module.exports = router 