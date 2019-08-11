import {ActionType} from './../action/index'

export const userReducer=(preState={}, action)=>{
  switch(action.type){
    case ActionType.GET_USER:{
      return{
        preState,
        ...action.payload
      }
    }
    default:{
      return preState
    }
    
  }
}


