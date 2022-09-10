const express = require('express')
const {
    createExercise,
    getExercise,
    getExercise1,
    deleteExercise,
    updateExercise
} = require('../Controller/exercisecontroller')

const router = express.Router()


//get all data
router.get('/', getExercise)

//single select data
router.get('/:id', getExercise1)

//POST a new data
router.post('/', createExercise)

//DELETE a data
router.delete('/:id', deleteExercise)

//UPDATE a data
router.patch('/:id', updateExercise)

module.exports = router