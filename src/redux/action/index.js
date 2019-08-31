import {reqLogin, reqMenuList, reqUserList,addUser} from './../../api/index'
// import {storageUtils} from '../../utils/storageUtils'
export const ActionType={
  "GET_USER":"GET_USER",
  "LOGIN_FAIL":"LOGIN_FAIL",
  "ADD_USER":"ADD_USER",
  "EDIT_USER":"EDIT_USER",
  "REMOVE_USER":"REMOVE_USER",
  "GET_MENULIST":"GET_MENULIST",
  "GET_USERLIST":"GET_USERLIST",
  "GET_USERLISTBYPAGINATION":"GET_USERLISTBYPAGINATION",

}
export const ActionCreator={
  //异步使用redux-thunk，配合发送ajax使用
  asyGetUser(user){
    return async(dispatch,getState)=>{
      let payload=await reqLogin(user)
      //因为检测的如果登录失败后台就不返回用户名了，所以不需要这个判断
      //失败以后会有err_msg，会自动显示。
      // if(payload.code===0){
      //   dispatch({
      //     type:ActionType.LOGIN_FAIL,
      //     payload
      //   })
      // }else{
      //   // storageUtils.saveUser(payload)
      //   dispatch({
      //     type:ActionType.GET_USER,
      //     payload
      //   })
      // }
      dispatch({
        type:ActionType.GET_USER,
        payload
      })
        
    }
  },
  asyAddUser(user){
    return async (dispatch,getState)=>{
      let data=await addUser(user)
      if(data.code===1){
        dispatch({
          type:ActionType.ADD_USER,
          payload:data.data
        })
      }
    }
  },
  editUser(){

  },
  removeUser(){
    return {
      type:ActionType.REMOVE_USER,
    }
  },
  asyGetMenulist(){
    return async(dispatch,getState)=>{
      let data=await reqMenuList();
      let MenuList=[...JSON.parse(data.MenuList)]
      dispatch({
        type:ActionType.GET_MENULIST,
        payload:MenuList
      })
    }
  },
  asyGetUserlist(){
    return async (dispatch,getState)=>{
      let {data}=await reqUserList();
      dispatch({
        type:ActionType.GET_USERLIST,
        payload:data
      })
    }
  },
  asyGetUserlistByPagination(currentPage,pageSize){
    return async (dispatch,getState)=>{
      let {data}=await reqUserList();
      dispatch({
        type:ActionType.GET_USERLISTBYPAGINATION,
        payload:data
      })
    }
  }
}



