import {userReducer} from './userreducer'
import{menuReducer} from './menureducer'
import{userlistReducer} from './userlistreducer'
import {combineReducers} from 'redux'
export const rootReducer= combineReducers({
  UserInfo: userReducer,
  MenuList: menuReducer,
  UserList:userlistReducer
})