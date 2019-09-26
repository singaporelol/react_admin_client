import {ajax,getJsonp} from './ajax';
export const api = {
  UserLogin: "/api/GetUserAuth",
  GetMenulist:"/api/GetMenulist",
  GetUserlist:"/api/GetUserlist",
  AddUser:"/api/addUserForm",
  GetUserlistByPagination:"/api/getUserlistByPagination"
};

export const reqLogin= (user)=> ajax(api.UserLogin,user);

export const reqWeather=()=>getJsonp();

export const reqMenuList=()=>ajax(api.GetMenulist);

export const reqUserList=()=>ajax(api.GetUserlist)
export const reqUserListByPagination=(currentPage,pageSize)=>ajax(api.GetUserlistByPagination,{currentPage,pageSize})
export const addUser=(user)=>ajax(api.AddUser,user,"post")
