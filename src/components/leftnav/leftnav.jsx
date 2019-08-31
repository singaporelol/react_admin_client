import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import "./leftnav.less";
import {menuConfig} from '../../config/menuConfig'
import {Link,withRouter} from 'react-router-dom'
import { ActionCreator } from "../../redux/action";
import Item from "antd/lib/list/Item";
const { SubMenu } = Menu;

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  getMenuListTree = (MenuList,pId) => {
   let rootMenuList=MenuList.filter((item)=>item.ParentId==pId);
   return rootMenuList.map(item=>{
     if(MenuList.filter(menuListItem=>menuListItem.ParentId==item.Id).length>0){
      return <SubMenu key={item.Id} title={item.Title}>
        {this.getMenuListTree(MenuList,item.Id)}
       </SubMenu>
    }else{
      return (
      <Menu.Item key={item.Id}>
        {/* {item.Title} */}
        <Link to={`${this.props.match.path}${item.Url}`}>{item.Title}</Link>
      </Menu.Item>
      )}
   })
  };

  static getDerivedStateFromProps(nextProps, preState) {
    if(nextProps.collapsed!==preState.collapsed){
      return {
        collapsed: nextProps.collapsed
      };
    }
    return null
  }
  componentDidMount(){
    this.props.getMenuList();
  }
  render() {
    let combineMenuList=menuConfig.concat(this.props.MenuList)
    // console.log(this.props)
    return (
      <div className="left-nav">
        <div className="logo">
          <img src="/favicon.ico" alt="logo" />
          {this.props.collapsed ? <span></span> : <span>React后台</span>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {this.getMenuListTree(combineMenuList,0)}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  MenuList: state.MenuList
});

const mapDispatchToProps = dispatch=>({
  //拿到menu菜单
  getMenuList(){
    dispatch(ActionCreator.asyGetMenulist())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeftNav));
