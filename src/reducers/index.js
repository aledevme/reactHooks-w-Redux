import counter from './counter'
import currentUser from './user'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    counter, 
    currentUser
})

export default rootReducer