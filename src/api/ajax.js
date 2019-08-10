import axios from 'axios';
import {message} from 'antd'

export const api={
  "UserLogin":'/api/GetUserAuth'
}

export const ajax =(data={},type="get") =>{
  
  return new Promise((resolve,reject)=>{
    console.log(data);
    let promise;
    if(type==="get"){
      let url=`http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
      promise=axios.get(url,{
        // params: data,
        // proxy:{
        //   host:'http://localhost',
        //   port:3812
        // }
      })
    }else{
      
    }
    promise
    .then(data=>resolve(data))
    .catch(err=>message.error("数据获取失败"))
  })
}
