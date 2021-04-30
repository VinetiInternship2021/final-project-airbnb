import { combineReducers } from 'redux'
import { currentUserReducer } from './currentUserReducer'

export const rootReducer = combineReducers({
    user: currentUserReducer,
})
