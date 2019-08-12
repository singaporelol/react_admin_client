import React,{Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import {connect} from 'react-redux'

// import {storageUtils} from './utils/storageUtils'
class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/admin" render={(props)=>{
              //在页面跳转之前，检查用户是否登录，如果未登录，跳转登录页面。
              if(Object.keys(this.props.UserInfo).length){
                return <Admin />
              }
              return <Redirect to="/login" {...props}/>
            }}/>
            <Route component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}


const mapStateToProps = (state) => ({
  UserInfo:state.UserInfo
})



export default connect(mapStateToProps)(App)

