import React, {useEffect, useState} from 'react'


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
          {exercises && exercises.map((exercise) =>(
            <p key={exercise._id}>{exercise.title}</p>
          ))}
        </div>

  )
}

export default Homepage