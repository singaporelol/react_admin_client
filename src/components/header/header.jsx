import React, { Component } from "react";
import { connect } from "react-redux";
import { utils } from "./../../utils/utils";
import "./header.less";
import {reqWeather} from './../../api/index'
import {ActionCreator} from './../../redux/action/index'
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
    
  }
  getTime(){
    this.timer=setInterval(()=>{
      this.setState({
        now:utils.getDate()
      })
     },1000)
  }
  async getWeather(){
    let {dayPictureUrl, weather}=await reqWeather()
    this.setState({
      dayPictureUrl,
      weather
    })
  }
  componentDidMount(){
    this.getTime()
    this.getWeather();
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <div className="header-top-user">
            <ul>
              <li>
                <span>欢迎</span>&nbsp;<a href="/">{this.props.username}</a>
              </li>
              <li>
                <a onClick={()=>this.props.logOut()}>退出</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          <ul>
            <li>
              <span>{this.state.now}</span>
            </li>
            <li>
              <img src={this.state.dayPictureUrl} alt="weather" />
            </li>
            <li>
              <span>{this.state.weather}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username:state.UserInfo.userinfo.UserName
});

const mapDispatchToProps = (dispatch)=>({
  logOut(){
   return dispatch(ActionCreator.removeUser())
  },
  // xxx:()=>{
  //   return dispatch(ActionCreator.removeUser())
  // },
  //报错
  // asyLogOut=()=>{
  //   return dispatch(ActionCreator.removeUser())
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
