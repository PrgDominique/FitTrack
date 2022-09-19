import React,{createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS':
            return {
                exercises: action.payload
            }
        case 'CREATE_WORKOUTS':
            return {
                exercises: [action.payload, ...state.exercises]
            }
        case 'DELETE_WORKOUTS':
            return {
                exercises: state.exercises.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) => {
const [state, dispatch] = useReducer(workoutsReducer, {
    exercises: null
})
    return ( 
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
     );
}
 
export default WorkoutContextProvider;