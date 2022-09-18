import {useContext} from 'react'
import { WorkoutsContext } from '../Context/WorkoutContext'


export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('useWorksContext must be used inside in workcontextprovider')
    }
    return context
}