import {userReducer} from './userreducer'

import {combineReducers} from 'redux'
export const rootReducer= combineReducers({
  UserInfo: userReducer
})