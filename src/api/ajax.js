import axios from 'axios';
import {message} from 'antd'

export const api={
  "UserLogin":'/api/GetUserAuth'
}
// let url=`http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
export const ajax =(data={},type="get") =>{
  
  return new Promise((resolve,reject)=>{
    let promise;
    if(type==="get"){
      promise=axios.get(api.UserLogin,{
        params: data,
      })
    }else{
      
    }
    promise
    .then(data=>resolve(data.data))
    .catch(err=>message.error("数据获取失败"))
  })
}
