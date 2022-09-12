import React, {useEffect, useState} from 'react'
import ExerciseDetails from '../../Components/ExerciseDetails'
import ExerciseForm from '../../Components/ExerciseForm'


const Homepage = () => {

   const [exercises, setExercise] = useState(null)

  useEffect(()=> {
    const fetchExercise = async () => {
      const response = await fetch('exercise')
    const json = await response.json()
      if (response.ok){
        setExercise(json)
      }
  } 
    fetchExercise()
  },[])

  return (
   <div>
        <div>
          {exercises && exercises.map((exercise) =>(
            <ExerciseDetails key={exercise._id} exercise={exercise}/>
          ))}
        </div>
        <ExerciseForm />
        </div>

  )
}

export default Homepage