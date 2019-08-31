import {ajax,getJsonp} from './ajax';
export const api = {
  UserLogin: "/api/GetUserAuth",
  GetMenulist:"/api/GetMenulist",
  GetUserlist:"/api/GetUserlist",
  AddUser:"/api/addUserForm"
};

export const reqLogin= (user)=> ajax(api.UserLogin,user);

export const reqWeather=()=>getJsonp();

export const reqMenuList=()=>ajax(api.GetMenulist);

export const reqUserList=()=>ajax(api.GetUserlist)
export const addUser=(user)=>ajax(api.AddUser,user,"post")