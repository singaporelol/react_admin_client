import axios from "axios";
import jsonp from "jsonp";
import {message} from 'antd'
export const api = {
  UserLogin: "/api/GetUserAuth"
};

// let url=`http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
export const ajax = (data = {}, type = "get") => {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "get") {
      promise = axios.get(api.UserLogin, {
        params: data
      });
    } else {
    }
    promise
      .then(data => resolve(data.data))
      .catch(err => message.error("数据获取失败"));
  });
};

export const getJsonp = () => {
  return new Promise((resolve, reject) => {
     jsonp(
      'http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
      (err,data)=>{
        if(err){
          message.error('请求数据失败，请稍后再试！')
        }else{
          resolve(data.results[0].weather_data[0])
        }
      }
    );
  });
};
