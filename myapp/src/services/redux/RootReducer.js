import { combineReducers } from 'redux'
import userData from './userData/userData';


const rootReducer = combineReducers({
    userData: userData
})

export default rootReducer;