import React from 'react'
import { Input, Button, Layout, Row, Col, Card, Typography, Divider, Select, Checkbox } from 'antd';
import { MobileOutlined, MailOutlined, EditOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

class Captain extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: "64px" }}>
                <Row justify="end" align="middle" style={{ borderBottom: "1px solid #ddd" }}>
                    <Col xl={8}>
                        <Title style={{ textAlign: "right" }} level={2}>Do you want to be a Captain?</Title>
                        <Title style={{ textAlign: "right" }} level={4}>Fill out the form to register as a Captain</Title>
                    </Col>
                    <Col xl={16}><img src={require("./assest/img/captain.png")} style={{ width: "100%" }} />
                    </Col>
                </Row>


                <Content className="site-layout" style={{ padding: '30px 50px', background: '#f1f3fa' }}>
                    <Card bordered={false} style={{ width: "50%", margin: "0 auto", marginTop: "30px" }}>

                        <Row gutter={16}>
                            <Col xl={24} style={{ marginBottom: "16px" }}>
                                <label labelAlign={"left"}><b>USCG Reference Number</b></label>
                                <Input
                                    size={"large"}
                                    prefix={<EditOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="USCG Reference Number"
                                />
                            </Col>
                            <Divider />
                            <Col xl={12} >
                                <label labelAlign={"left"}><b>Phone</b></label>
                                <Input
                                    size={"large"}
                                    prefix={<MobileOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="(772) 555-5555"
                                />
                            </Col>
                            <Col xl={12} >
                                <label labelAlign={"left"}><b>Email</b></label>
                                <Input
                                    size={"large"}
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    type="email"
                                    placeholder="email@domain.com"
                                />
                            </Col>
                        </Row>
                        <Divider>Your Address</Divider>
                        <Row gutter={16}>
                            <Col xl={24}>
                                <label labelAlign={"left"}><b>Let us know where you call home.</b></label>
                                <Input.TextArea
                                    size={"large"}
                                    rows={5}
                                />
                            </Col>
                        </Row>
                        <Divider>About You</Divider>
                        <Row gutter={16}>
                            <Col xl={24} >
                                <label labelAlign={"left"}><b>Tell us more about yourself, captain</b></label>
                                <Input.TextArea
                                    size={"large"}
                                    rows={3}
                                />
                            </Col>

                        </Row>
                        <Divider />
                        <Row gutter={16}>
                        <Col xl={12}>
                        <label labelAlign={"left"}><b>Years of Experience</b></label>
                        <Select defaultValue="1 Year" style={{ width: "100%" }} >
                            <Option value="1">1 Year</Option>
                            <Option value="2">2 Years</Option>
                            <Option value="3">3 Years</Option>
                            <Option value="4">4 Years</Option>
                            <Option value="5">5+ Years</Option>
                            </Select>
                        </Col>
                        <Col xl={12}>
                        <label labelAlign={"left"}><b>Languages Spoken</b></label>
                        <Checkbox.Group style={{ width: '100%' }} >
                            <Row>
                            <Col span={8}>
                                <Checkbox value="A">English</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B">Spanish</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C">French</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D">Italian</Checkbox>
                            </Col>
                            <Col span={9}>
                                <Checkbox value="E">Portuguese</Checkbox>
                            </Col>
                            </Row>
                        </Checkbox.Group>
                        </Col>
                        </Row>

                        <Divider />
                        <NavLink to="/conditioncheck" ><Button size={"large"} block type="primary"> ALL SET / CONTINUE</Button></NavLink>
                    </Card>
                </Content>
            </div>
        )
    }
}
export default Captain