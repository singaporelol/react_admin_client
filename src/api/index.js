import {ajax,getJsonp} from './ajax';

export const reqLogin= (user)=> ajax(user);

export const reqWeather=()=>getJsonp();