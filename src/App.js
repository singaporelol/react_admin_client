import React from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import {storageUtils} from './utils/storageUtils'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" render={(props)=>{
            //在页面跳转之前，检查用户是否登录，如果未登录，跳转登录页面。
            if(storageUtils.getUser()){
              return <Admin {...props}/>
            }
            return <Redirect to="/login"/>
          }}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
