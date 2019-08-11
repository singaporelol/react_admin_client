import {reqLogin} from './../../api/index'

export const ActionType={
  "GET_USER":"GET_USER",
  "ADD_USER":"GET_USER",
  "EDIT_USER":"EDIT_USER"
}
export const ActionCreator={
  //异步使用redux-thunk，配合发送ajax使用
  asyGetUser(user){
    return async(dispatch,getState)=>{
      let payload=await reqLogin(user)
      dispatch({
        type:ActionType.GET_USER,
        payload
      })
    }
  },
  addUser(){

  },
  editUser(){

  },
}



