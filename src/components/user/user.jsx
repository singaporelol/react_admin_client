import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../../redux/action/index";
import { Card, Table, Button, Modal, Form, Input} from "antd";

// rowSelection object indicates the need for row selection
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(
			`selectedRowKeys: ${selectedRowKeys}`,
			"selectedRows: ",
			selectedRows
		);
	},
	getCheckboxProps: record => ({
		disabled: record.name === "Disabled User", // Column configuration not to be checked
		name: record.name
	})
};

export class User extends Component {
	constructor() {
		super();
		this.state = {
      vasible: false,
      currentPage:1,
      pageSize:3,
      total:0,
			columns: [
				{
					title: "用户名",
					dataIndex: "UserName",
					key: "Id"
				},
				{
					title: "编辑",
					dataIndex: "edit",
					render: (text, record, index) => {
						return (
							<div>
								<Button>修改</Button>
								&nbsp;
								<Button>删除</Button>
							</div>
						);
					}
				}
			]
		};
	}
	async componentDidMount() {
    // this.props.getUserlist();
    let total=await this.props.getUserlistByPagination(this.state.currentPage,this.state.pageSize)
    this.setState({
      total:total
    })
	}
	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = e => {
		e.preventDefault();
    let user=this.props.form.getFieldsValue();
    this.props.addUser(user);
    this.setState({
      visible: false
    });
		
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false
		});
	};
	render() {
		let columns = this.state.columns;
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<Card>
					<Button onClick={this.showModal}>新增</Button>
				</Card>
				<Card>
					<Table
						rowSelection={rowSelection}
						columns={columns}
						dataSource={this.props.UserList}
            rowKey="Id"
            pagination={{
              defaultPageSize:this.state.pageSize,
              total:this.state.total,
              onChange:(page,pageSize)=>{
                this.props.getUserlistByPagination(page,pageSize)
              }
            }}
					/>
          
				</Card>
				<Modal
					title="添加"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<Form className="add-user-form">
						<Form.Item label="用户名">
							{getFieldDecorator("UserName", {
								// initialValue:"admin",
							})(<Input placeholder="Username" />)}
						</Form.Item>
						<Form.Item label="密码">
							{getFieldDecorator("Password", {
							})(<Input type="password" placeholder="Password" />)}
						</Form.Item>
					</Form>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	UserList: state.UserList
});

const mapDispatchToProps = dispatch => ({
	// getUserlist() {
	// 	dispatch(ActionCreator.asyGetUserlist());
  // },
  getUserlistByPagination(currentPage,pageSize){
     return dispatch(ActionCreator.asyGetUserlistByPagination(currentPage,pageSize))
  },
  addUser(user){
    dispatch(ActionCreator.asyAddUser(user));
  }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form.create({ name: "normal_login" })(User));
