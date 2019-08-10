import React, { Component } from "react";
import "./login.less";
import { Form, Icon, Input, Button } from 'antd';
import {reqLogin} from './../../api/index'
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //发送ajax请求到后台
        let {data}=await reqLogin(values);
        console.log(data);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout={
      labelCol:{
        xs:{span:24},
        sm:{span:5}
      },
      wrapperCol:{
        xs:{span:24},
        sm:{span:19}
      }
    }
    return (
      <div className="login">
        <header className="login-header">
          <img src="./favicon.ico" alt="logo" />
          <div className="login-header-title">React项目：后台管理系统</div>
        </header>
        <div className="login-body">
          <div className="login-body-form">
            <div className="login-body-form-title">用户登录</div>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                  label="用户名"
                  {...formItemLayout}
                >
                  {getFieldDecorator("username", {
                    initialValue:"admin",
                    rules: [
                      { required: true, message: "请输入用户名" },
                      { min: 3, message: "用户名不能少于3位" },
                      { max: 12, message: "用户名不能大于12位" },
                      {pattern:/^[0-9a-zA-Z]+$/, message:"用户名必须为数字或字母"}
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                    />
                  )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="密码" required>
                  {getFieldDecorator("password", {
                    initialValue:"123",
                    rules: [
                      {validator:(rule,value,callback)=>{
                        if(value.trim().length===0){
                          callback('密码不能为空')
                        }else if(value.length<3){
                          callback('密码不能少于3位')
                        }else if(value.length>12){
                          callback('密码不能超过12位')
                        }else if (!/^[0-9a-zA-Z]+$/.test(value)){
                          callback('用户名必须为数字或字母')
                        }else{
                          callback()
                        }
                      }}
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    className="login-form-submit"
                    htmlType="submit"
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Login);

