import React from 'react';
import { Layout, Menu, Modal, Input, Button, Carousel, Form, Checkbox, Row, Col, Collapse, DatePicker, Select, Card, Rate, Radio   } from 'antd';
import { SearchOutlined, LockOutlined, UserOutlined, ShareAltOutlined ,CheckCircleTwoTone,HeartTwoTone, EnvironmentTwoTone, CalendarTwoTone,MehTwoTone,StarTwoTone} from '@ant-design/icons';

import logo from './logo.svg';
import './App.scss';

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Meta } = Card;

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


          <div className="site-layout-background" >
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

          <Content className="site-layout" style={{ padding: '50px', background: '#fff' }}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>

                <Collapse expandIcon={({ isActive }) => <EnvironmentTwoTone />}>
                  <Panel header="Location" key="1" >
                    <div><Input placeholder="Search Location" size="large" /> </div>
                  </Panel>
                  </Collapse>

                  <Collapse expandIcon={({ isActive }) =><CalendarTwoTone />}>
                  <Panel header="Select Date" key="2" >
                    <div><RangePicker size="large" /></div>
                  </Panel>
                  </Collapse>

                  <Collapse expandIcon={({ isActive }) => <MehTwoTone />}>
                  <Panel header="Select Passenger" key="3" >
                    <div><Select defaultValue="1" style={{ width: '100%' }} size="large">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                    </Select></div>
                  </Panel>

                  </Collapse>


                  <Collapse expandIcon={({ isActive }) => <MehTwoTone />}>
                  <Panel header="Select Capton" key="4" >
                    <div>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                      <Radio.Button value="a">With Capton</Radio.Button>
                      <Radio.Button value="b">Without Capton</Radio.Button>
                    </Radio.Group>
                    </div>
                  </Panel>
                  </Collapse>

                  <Collapse expandIcon={({ isActive }) => <StarTwoTone />}>

                  <Panel header="Select Rating" key="5" >
                    <div><Rate /></div>
                  </Panel>
                </Collapse>

              </Col>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>

                <Row gutter={16}>
                  <Col xl={6}>
                    <Card
                      title="Lorem ipsum "
                      
                      actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img alt="example" src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                    >
                      
                      <Meta title="Europe Street beat" description="$200/Day"  />
                      <Rate value={3}  disabled/>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card
                      title="Lorem ipsum "
                      
                      actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img alt="example" src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                    >
                      <Meta title="Europe Street beat" description="$200/Day" />
                      <Rate value={4}  disabled/>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card
                      title="Lorem ipsum "
                       actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img alt="example" src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                    >
                      <Meta title="Europe Street beat" description="$200/Day" />
                      <Rate value={1}  disabled/>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card
                      title="Lorem ipsum "
                       actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img alt="example" src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                    >
                      <Meta title="Europe Street beat" description="$200/Day" />
                      <Rate value={5}  disabled/>
                    </Card>
                  </Col>
                </Row>
              </Col>

            </Row>
          </Content>



          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>



      </div>
    );
  }
}




export default App;
