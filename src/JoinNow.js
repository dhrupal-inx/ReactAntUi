import React from 'react'
import {  Input, Button, Layout, Row, Col, Card, Typography, Divider, Anchor  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';


const { Content } = Layout;
const { Title, Text } = Typography;


class JoinNow extends React.Component {
    render() {
        return (
            <div>
                <img src={require("./assest/img/banner.jpg")} style={{ width: "100%" }} />

                
                <Content className="site-layout" style={{ padding: '30px 50px', background: '#f1f3fa' }}>
                <Card  bordered={false} style={{ width: 600, margin:"0 auto",textAlign:"center",marginTop:"-100px" }}>
                    
                  <Title level={3} style={{textAlign:"center",marginBottom:"5px"}}>Welcome Aboard</Title>
                  <Text>Already Have An Account? <a href="#">Sign In</a></Text>
                  <Divider />
                  <Row gutter={16}>
                      <Col xl={12}>

                      <Button block size={"large"} icon={<FacebookOutlined />} type="primary" ghost>Facebook</Button>
                      </Col>

                      <Col xl={12}>

                      <Button block size={"large"} icon={<GoogleOutlined />} danger>Google</Button>
                      </Col>
                  </Row>
                  <Divider>Or</Divider>
                    <Row gutter={16}>
                    <Col xl={12}  style={{marginBottom:"16px"}}>
                            <Input
                                size={"large"}
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="First Name"
                            />
                        </Col>
                        <Col xl={12} >
                            <Input
                                size={"large"}
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="Last Name"
                            />
                        </Col>
                        <Col xl={12} >
                            <Input
                                size={"large"}
                                prefix={<MailOutlined  className="site-form-item-icon" />}
                                type="email"
                                placeholder="Email"
                            />
                        </Col>
                        <Col xl={12} >
                            <Input
                                size={"large"}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Col>

                        <Col xl={8} offset={8} style={{marginTop:"25px", marginBottom:"20px"}}>
                            <Button size={"large"} block type="primary">JOIN NOW</Button></Col>
                      <div style={{width:"100%"}}><Text>By joining up you agree with Boat Fuji's 
                          <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></Text></div>
                    </Row>
                    </Card>
                </Content>
            </div>
        )
    }
}
export default JoinNow