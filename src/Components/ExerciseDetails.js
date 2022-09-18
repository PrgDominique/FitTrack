import React from 'react'

const ExerciseDetails = ({exercise}) => {
  return (
      <div className="workout-details">
        <h4>{exercise.title}</h4>
        <p><strong>Load (kg): </strong>{exercise.load}</p>
        <p><strong>Number of reps: </strong>{exercise.reps}</p>
        <p>{exercise.createdAt}</p>
      </div>
  )
}

export default ExerciseDetails