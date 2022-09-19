import React, { useContext, useState } from "react";
import { WorkoutsContext } from "../Context/WorkoutContext";



const ExerciseForm = () => {
  const { dispatch } = useContext(WorkoutsContext)
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [EmptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const exercises = {title, load, reps}

    const response = await fetch('exercise', {
        method: 'POST',
        body: JSON.stringify(exercises),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.text()

    if(!response.ok) {
        setError(json.error)
        setEmptyFields([json.EmptyFields])
    }
    if (response.ok){
      
      setError(null)
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        setEmptyFields([])
        console.log("new workout added", json);
        dispatch({type: 'CREATE_WORKOUTS', payload: json})
        
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3> Add a New Workout </h3>
      <label> Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={EmptyFields.includes('title') ? 'error' : ''}
      />
      <label> Load:</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={EmptyFields.includes('load') ? 'error' : ''}
      />
      <label> Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={EmptyFields.includes('reps') ? 'error' : ''}
      />
      <button>Add new Workout</button>

      {error && <div className="error">{error}</div>}
      
    </form>
  );
};

export default ExerciseForm;
