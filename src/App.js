import React from 'react';
import { Layout, Menu, Modal, Input, Button, Carousel, Form, Checkbox } from 'antd';
import { SearchOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import logo from './logo.svg';
import './App.scss';

const { Header, Content, Footer } = Layout;

function onChange(a, b, c) {
  console.log(a, b, c);
}
const onFinish = values => {
  console.log('Received values of form: ', values);
};
const props = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};


 


class App extends React.Component {
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
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 25px' }}>
            <div className="logo">
              <img src={require('./assest/img/logo.svg')} />
            </div>
            <div className="search-box">
              <Input placeholder="Search..." prefix={<SearchOutlined />} />
            </div>
            <Menu theme="dark" mode="horizontal" >
              <Menu.Item key="1" onClick={this.showModal}>Join Now</Menu.Item>
              <Menu.Item key="2">Sign Up</Menu.Item>
              <Menu.Item key="3">Be A Captain</Menu.Item>
              <Menu.Item key="4">Help</Menu.Item>
            </Menu>
            <Button>List Your Boat</Button>
          </Header>
          <Content className="site-layout" style={{ marginTop: 64 }}>

            <div className="site-layout-background" style={{ minHeight: 500 }}>
              <Carousel afterChange={onChange} {...props}>

                <div>
                  <img src={require('./assest/img/1.jpg')} />
                </div>
                <div>
                  <img src={require('./assest/img/2.jpg')} />
                </div>
                <div>
                  <img src={require('./assest/img/3.jpg')} />
                </div>
                <div>
                  <img src={require('./assest/img/1.jpg')} />
                </div>
                <div>
                  <img src={require('./assest/img/2.jpg')} />
                </div>
                <div>
                  <img src={require('./assest/img/3.jpg')} />
                </div>
                <div>
                  <img src={require('./assest/img/3.jpg')} />
                </div>
              </Carousel>
            </div>
            <div>

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
                  onFinish={onFinish}
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
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>



      </div>
    );
  }
}




export default App;
