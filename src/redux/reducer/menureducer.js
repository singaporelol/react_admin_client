import {ActionType} from './../action/index'

export const menuReducer=(preState=[], action)=>{
  switch(action.type){
    case ActionType.GET_MENULIST:{
      return action.payload
    }
    default:{
      return preState
    }
    
  }
}


