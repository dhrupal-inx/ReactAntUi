import React  from 'react';
import { Layout, Row, Col, Carousel, List, Typography, 
        Divider, Rate, Avatar, Descriptions, Comment,
         Breadcrumb , Button, Drawer, Radio } from 'antd';
import { EnvironmentOutlined, UserOutlined, DoubleRightOutlined, HomeOutlined } from '@ant-design/icons';


const { Title, Text } = Typography;
const { Content } = Layout;



const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

};
const data = [
    {
        title: 'Title 1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Title 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Title 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Title 4',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
];
class BoatDetails extends React.Component {

    state = { visible: false };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };


    render() {
        return (
            <div style={{ paddingTop: "64px" }}>
                <Carousel {...props}>
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
                <Content className="site-layout" style={{ padding: '30px 50px', background: '#fff' }}>
                    <Row gutter={16}>

                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">
                        <HomeOutlined />
                        </Breadcrumb.Item>
                        
                        <Breadcrumb.Item>Wakeboard/ Ski Boats</Breadcrumb.Item>
                    </Breadcrumb>

                
                <div style={{position:"relative",width:"100%", float:"right"}}>
                    <Button onClick={this.showDrawer} className="book-boat-btn" type="primary"> REQUEST TO BOOK </Button></div>
                    <Drawer
                    title="Wakeboard/ Ski Boats ( $790.62 + Fule ) "
                    placement="right"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={"50%"}
                    footer={
                        <div
                          style={{
                            textAlign: 'right',
                          }}
                        >
                          <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancel
                          </Button>
                          <Button onClick={this.onClose} type="primary">
                            Submit
                          </Button>
                        </div>
                      }
                >
                     <Row gutter={16}>
    
                     <Col xl={12}><img src={require("./assest/img/map.png")} style={{width:"100%"}}/></Col>
                     <Col xl={12}>
                     <div>
                         <Text>Select Capton</Text>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value="a">With Capton</Radio.Button>
                                    <Radio.Button value="b">Without Capton</Radio.Button>
                                </Radio.Group>
                            </div>
                     </Col>
                     </Row>

                </Drawer>

                        <Col xl={24}>
                            <Title style={{ marginTop: "20px", marginBottom: "5px" }} level={2}>Wakeboard/ Ski Boats </Title>
                            <Title style={{ marginTop: "5px", marginBottom: "5px" }} level={3}>$790.62 + Fule</Title>
                            <Title style={{ marginTop: "10px" }} level={4}><EnvironmentOutlined style={{ fontSize: '18px', color: '#222' }} /> Tampa Bay, Florida </Title>
                            <div><Rate value={3} disabled /></div>


                            <Divider orientation="left"> SUMMARY </Divider>
                            <Text strong>If you would like the boat delivered to a ramp of your choice, just contact me and we can make the arrangements. The head compartment is a port-a potty not fix restroom. Please inform me if you need or else it will not be automatically in. Thanks</Text>

                            <Divider orientation="left"> DESCRIPTION </Divider>
                            <Text strong>Delivery to a ramp near you.
                            24’ jet boat. No propellers so safe for kids. Also easier to dock backwards on the sandbar. Fits up to 12 people depending on weight restriction. Twin engine. Great for towing tubes, skis, or wakeboards. Fish from the front or on the back Swim Deck. Comes with 1-2 person TUBE, bouys, all dock lines needed, and lifevests from infants to adults.
                            If you would like the boat delivered to a ramp of your choice, just contact me and we can make the arrangements. The head compartment is a port-a potty not fix restroom. Please inform me if you need or else it will not be automatically in. Thanks</Text>

                            <Divider orientation="left"> ACTIVITIES </Divider>
                            <Row gutter={16}>
                                <Col xl={3}>
                                    <Avatar shape="square" size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xl={3}>
                                    <Avatar shape="square" size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xl={3}>
                                    <Avatar shape="square" size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xl={3}>
                                    <Avatar shape="square" size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xl={3}>
                                    <Avatar shape="square" size={100} icon={<UserOutlined />} />
                                </Col>
                            </Row>
                            <Divider orientation="left"> AMENITIES </Divider>
                            <Descriptions>
                                <Descriptions.Item label={<DoubleRightOutlined />}>Zhou Maomao</Descriptions.Item>
                                <Descriptions.Item label={<DoubleRightOutlined />}>1810000000</Descriptions.Item>
                                <Descriptions.Item label={<DoubleRightOutlined />}>Hangzhou, Zhejiang</Descriptions.Item>
                                <Descriptions.Item label={<DoubleRightOutlined />}>empty</Descriptions.Item>
                                <Descriptions.Item label={<DoubleRightOutlined />}>Zhejiang, China</Descriptions.Item>
                                <Descriptions.Item label={<DoubleRightOutlined />}>empty</Descriptions.Item>

                            </Descriptions>

                            <Divider orientation="left">Boat Details</Divider>
                            <List
                                size="large"
                                bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />


                            <Divider orientation="left"> FROM THE OWNER </Divider>
                            <Comment

                                author={<a>Meet Joseph </a>}
                                avatar={
                                    <Avatar
                                        shape="square"
                                        size={100}
                                        icon={<UserOutlined />}
                                        alt="Han Solo"
                                    />
                                }
                                content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                                        and efficiently.
                                </p>
                                }
                            />
                        </Col>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default BoatDetails;