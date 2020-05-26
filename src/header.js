import React from 'react';
import { Layout, Menu, Input, Button, Modal, Form, Checkbox  } from 'antd';
import {  LockOutlined, UserOutlined, SearchOutlined} from '@ant-design/icons';
import { NavLink } from "react-router-dom";


const { Header } = Layout;

class HeaderMain extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    render() {
      
       return (
        <div>
        <Header style={{ position: 'fixed', zIndex: 10, width: '100%', padding: '0 25px' }}>
        <div className="logo">
        <NavLink  to="/home"> <img src={require('./assest/img/logo.svg')} /></NavLink>
        </div>
        <div className="search-box">
          <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
        </div>
        <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1"  ><NavLink to="/joinNow" >Join Now</NavLink></Menu.Item>
          <Menu.Item key="2" onClick={this.showModal}>Sign Up</Menu.Item>
          <Menu.Item key="3"><NavLink to="/captain" >Be A Captain</NavLink></Menu.Item>
          <Menu.Item key="4">Help</Menu.Item>
          <Menu.Item key="5"> <Button>List Your Boat</Button></Menu.Item>
        </Menu>
       
      </Header>


<Modal
title="Join Us"
visible={this.state.visible}
// onOk={this.handleOk}
onCancel={this.handleCancel}
>
<Form
  name="normal_login"
  className="login-form"
  initialValues={{
    remember: true,
  }}
 
>
  <Form.Item
    name="username"
    rules={[
      {
        required: true,
        message: 'Please input your Username!',
      },
    ]}
  >
    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
  </Form.Item>
  <Form.Item
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input your Password!',
      },
    ]}
  >
    <Input
      prefix={<LockOutlined className="site-form-item-icon" />}
      type="password"
      placeholder="Password"
    />
  </Form.Item>
  <Form.Item>
    <Form.Item name="remember" valuePropName="checked" noStyle>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <a className="login-form-forgot" href="">
      Forgot password
</a>
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
</Button>
Or <a href="">register now!</a>
  </Form.Item>
</Form>
</Modal>
</div>
       )
    } 
}

export default HeaderMain;