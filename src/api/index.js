import {ajax,getJsonp} from './ajax';
export const api = {
  UserLogin: "/api/GetUserAuth",
  GetMenulist:"/api/GetMenulist",
};

export const reqLogin= (user)=> ajax(api.UserLogin,user);

export const reqWeather=()=>getJsonp();

export const reqMenuList=()=>ajax(api.GetMenulist);