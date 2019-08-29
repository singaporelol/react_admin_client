import {ActionType} from './../action/index'

export const userReducer=(preState={}, action)=>{
  switch(action.type){
    case ActionType.GET_USER:{
      // action.payload.userMenu={...JSON.parse(action.payload.userMenu)}
      // action.payload.userActionModule={...JSON.parse(action.payload.userActionModule)}
      // debugger;
      return{
        preState,
        ...action.payload
      }
    }
    case ActionType.LOGIN_FAIL:{
      return{
        preState,
        ...action.payload
      }
    }
    case ActionType.REMOVE_USER:{
      return {}
    }
    default:{
      return preState
    }
    
  }
}


