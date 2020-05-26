import React from 'react'
import { Input, Button, Layout, Row, Col, Card, Typography, Divider, Anchor } from 'antd';
import { MobileOutlined, LockOutlined, MailOutlined, EditOutlined } from '@ant-design/icons';


const { Content } = Layout;
const { Title, Text } = Typography;

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
                    <Card hoverable={true} bordered={false} style={{ width: "50%", margin: "0 auto", marginTop: "30px" }}>

                        <Row gutter={16}>
                            <Col xl={24} style={{ marginBottom: "16px" }}>
                                <label labelAlign={"left"}>USCG Reference Number</label>
                                <Input
                                    size={"large"}
                                    prefix={<EditOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="USCG Reference Number"
                                />
                            </Col>
                            <Divider />
                            <Col xl={12} >
                                <label labelAlign={"left"}>Phone</label>
                                <Input
                                    size={"large"}
                                    prefix={<MobileOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="(772) 555-5555"
                                />
                            </Col>
                            <Col xl={12} >
                                <label labelAlign={"left"}>Email</label>
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
                            <Col xl={24} >
                                <label labelAlign={"left"}>Let us know where you call home.</label>
                                <Input.TextArea
                                    size={"large"}
                                    rows={5}
                                />
                            </Col>
                        </Row>
                        <Divider>About You</Divider>
                        <Row gutter={16}>
                            <Col xl={24} >
                                <label labelAlign={"left"}>Let us know where you call home.</label>
                                <Input.TextArea
                                    size={"large"}
                                    rows={3}
                                />
                            </Col>

                        </Row>
                    </Card>
                </Content>
            </div>
        )
    }
}
export default Captain