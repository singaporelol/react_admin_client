import React, { Component } from "react";
import { connect } from "react-redux";
import LeftNav from "./../../components/leftnav/leftnav";
import { Layout, Breadcrumb } from "antd";
import Header from "./../../components/header/header";
import { Route, Switch } from "react-router-dom";
import "./admin.less";
import Main from "./../../components/main/main";
import UserInfo from "../../components/userinfo/userinfo";
import User from "../../components/user/user";

const { Content, Footer, Sider } = Layout;

class Admin extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  // getBreadcrumb(path){
  //   console.log(path)
  //   return path.split('/').map(item=>{
  //     if(item){
  //       return <>
  //     }
  //   })
  // }
  render() {
    console.log(this.props);
    let { path } = this.props.match;
    return (
      <Layout className="admin">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width="280px"
        >
          <LeftNav collapsed={this.state.collapsed} />
        </Sider>
        <Layout>
          <Header />
          <Content style={{ margin: "16px 16px", backgroundColor:"#fff" }}>
            <Breadcrumb style={{ margin: "16px 16px", borderBottom:"1px solid #aaa" }} separator=">">
              {/* <Breadcrumb.Item><a>user</a></Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              {/* {this.getBreadcrumb(path)} */}
            </Breadcrumb>
            <Switch>
              <Route path={path} exact component={Main} />
              <Route path={`${path}/userinfo`} component={UserInfo} />
              <Route path={`${path}/user`} component={User} />
              <Route path={`${path}/`} component={Main} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  UserInfo: state.UserInfo
});

export default connect(mapStateToProps)(Admin);
