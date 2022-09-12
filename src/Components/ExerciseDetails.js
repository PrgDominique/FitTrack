import React from 'react'

const ExerciseDetails = ({exercise}) => {
  return (
    <div>
        <h1>{exercise.title}</h1>
        <h2>Load: {exercise.load}</h2>
        <h2>Reps: {exercise.reps}</h2>
        <h3>{exercise.createdAt}</h3>
        </div>
  )
}

export default ExerciseDetails