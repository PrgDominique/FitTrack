import React, { useContext, useEffect } from "react";
import ExerciseDetails from "../../Components/ExerciseDetails";
import ExerciseForm from "../../Components/ExerciseForm";
import { WorkoutsContext } from "../../Context/WorkoutContext";

const Homepage = () => {
  const { exercises, dispatch } = useContext(WorkoutsContext);

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await fetch("exercise");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchExercise();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseDetails key={exercise._id} exercise={exercise} />
          ))}
      </div>
      <ExerciseForm />
    </div>
  );
};

export default Homepage;
