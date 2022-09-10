
require('dotenv').config()

const express = require('express')
const exerciseroutes = require('./routes/exercise')
const mongoose = require('mongoose')

const app = express()


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/exercise', exerciseroutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => { 
    app.listen(process.env.PORT , () => {
      console.log('Connected to database & listening port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})




