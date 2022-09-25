const mongoose = require('mongoose')

const exercises = require('../model/exercises')

// get all data
const getExercise = async (req, res) => {
    const exercise = await exercises.find({}).sort({createdAt: -1})
res.status(200).json(exercise)
}

//get single data
const getExercise1 = async (req, res ) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such exercise'})
    }

    const exercise1 = await exercises.findById(id)

    if (!exercise1) {
        return res.status(404).json({error: 'No such a exercise'})
 
    }
    res.status(200).json(exercise1)
}
//create a new data 
const createExercise = async (req, res) =>{
    const {title, load, reps} = req.body

    // add data in db
    try {
        const Exercise = await exercises.create({title, load, reps})
        res.status(200).json(exercises)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a data 
const deleteExercise = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such exercise'})
    }
    const exercise2 = await exercises.findOneAndDelete({_id: id})

    if (!exercise2) {
        return res.status(404).json({error: 'No such a exercise'})
 
    }
    res.status(200).json(exercise2)

}
//update a data

const updateExercise = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such exercise'})
    }
    const exercise3 = await exercises.findOneAndUpdate({_id: id}, {
        ...req.body
    })


    if (!exercise3) {
        return res.status(404).json({error: 'No such a exercise'})
 
    }
    res.status(200).json(exercise3)
}

module.exports = {
    getExercise,
    getExercise1,
    createExercise,
    deleteExercise,
    updateExercise
    
}