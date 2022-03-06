import { combineReducers } from 'redux'
import apiReducer from './API/apiReducer'

const rootReducer = combineReducers({
  storedData: apiReducer
})

export default rootReducer
