import {userReducer} from './userreducer'
import{menuReducer} from './menureducer'
import {combineReducers} from 'redux'
export const rootReducer= combineReducers({
  UserInfo: userReducer,
  MenuList: menuReducer,
})