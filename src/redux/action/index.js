import {reqLogin} from './../../api/index'
import {storageUtils} from '../../utils/storageUtils'
export const ActionType={
  "GET_USER":"GET_USER",
  "LOGIN_FAIL":"LOGIN_FAIL",
  "ADD_USER":"GET_USER",
  "EDIT_USER":"EDIT_USER"
}
export const ActionCreator={
  //异步使用redux-thunk，配合发送ajax使用
  asyGetUser(user){
    return async(dispatch,getState)=>{
      let payload=await reqLogin(user)
      if(payload.code===0){
        dispatch({
          type:ActionType.LOGIN_FAIL,
          payload:payload.errMsg
        })
      }else{
        storageUtils.saveUser(payload)
        dispatch({
          type:ActionType.GET_USER,
          payload
        })
      }

        
    }
  },
  addUser(){

  },
  editUser(){

  },
}



