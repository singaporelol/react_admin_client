import {ActionType} from '../action/index'
export const userlistReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_USERLIST:
      return [...action.payload];
    case ActionType.ADD_USER:
      return [...state,action.payload];
    case ActionType.GET_USERLISTBYPAGINATION:
      return [...action.payload]
    default:
      return state
  }
}