import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import "./leftnav.less";
const { SubMenu } = Menu;

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state={
      collapsed:this.props.collapsed
    }
  }
  loadMenuList = menuList => {
    return menuList.map((item, index) => {
      if (item.ChildMenu.length <= 0) {
        return (
          <Menu.Item key={item.Id}>
            <span>
              <Icon type="team" />
              <span>{item.Title}</span>
            </span>{" "}
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={item.Id}
            title={
              <span>
                <Icon type="team" />
                <span>{item.Title}</span>
              </span>
            }
          >
            {this.loadMenuList(item.ChildMenu)}
          </SubMenu>
        );
      }
    });
  };

  static getDerivedStateFromProps(prestate, nextstate) {
    return {
      collapsed: prestate.collapsed
    };
  }

  render() {
    let { MenuList } = this.props.UserInfo.userAllAction;
    return (
      <div className="left-nav">
        <div className="logo">
          <img src="/favicon.ico" alt="logo" />
          {this.props.collapsed ? <span></span> : <span>React后台</span>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {this.loadMenuList(MenuList)}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserInfo: state.UserInfo
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNav);
