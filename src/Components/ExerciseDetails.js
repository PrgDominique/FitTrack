import React, { useContext } from 'react'
import { WorkoutsContext } from '../Context/WorkoutContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ExerciseDetails = ({exercise}) => {

  const {dispatch} = useContext(WorkoutsContext)
  const handleClick = async() => {
    const response = await fetch ('exercise/' + exercise._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUTS', payload: json})
    }
  }

  return (
      <div className="workout-details">
        <h4>{exercise.title}</h4>
        <p><strong>Load (kg): </strong>{exercise.load}</p>
        <p><strong>Number of reps: </strong>{exercise.reps}</p>
        <p>{formatDistanceToNow(new Date(exercise.createdAt), { addSuffix: true})}</p>
        <span className='material-icons' onClick={handleClick}> delete </span>
      </div>
  )
}

export default ExerciseDetails