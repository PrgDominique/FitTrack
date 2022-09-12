import React, { useState } from "react";

const ExerciseForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) =>{
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
    }
    if (response.ok){
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        console.log("new workout added", json);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3> Add a New Workout </h3>
      <label> Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label> Load:</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label> Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add new Workout</button>

      {error && <div>{error}</div>}
      
    </form>
  );
};

export default ExerciseForm;
