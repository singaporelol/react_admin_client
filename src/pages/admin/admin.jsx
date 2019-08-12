import React, { Component } from "react";

import { connect } from "react-redux";
import LeftNav from './../../components/leftnav/leftnav'
import { Layout, Breadcrumb} from "antd";
import "./admin.less";

const { Header, Content, Footer, Sider } = Layout;

class Admin extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    
    
    return (
      <Layout className="admin">
        {/* <div className="left-nav"> */}
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width="280px"
        >
          <LeftNav collapsed={this.state.collapsed}/>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Bill is a cat.
            </div>
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
  UserInfo:state.UserInfo
});

export default connect(
  mapStateToProps
)(Admin);
