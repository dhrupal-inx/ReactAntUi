import React from 'react';
import { Row, Col, Card, Rate, Pagination ,Typography  } from 'antd';
import { ShareAltOutlined ,CheckCircleTwoTone,HeartTwoTone, SafetyOutlined} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
const { Meta } = Card;
const { Text,Title } = Typography;

class BoatList extends React.Component {
    render() {
       return (
          <div>
            <Row gutter={16}>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Fishing Boats"
                      style={{marginBottom:"20px"}}
                      actions={[
                        <SafetyOutlined style={{ fontSize: '20px', color: '#52c41a' }}/>,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img src="https://www.marineinsight.com/wp-content/uploads/2013/05/fishing-boat1.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      
                      <Meta title="Built exclusively for fishing" description="$200/Day"  />
                     
                      <Rate value={3}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Dinghy Boats"
                      style={{marginBottom:"20px"}}
                      actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img src="https://www.marineinsight.com/wp-content/uploads/2013/05/Dinghy-boat1.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      <Meta title="A dinghy can be a small inflatable" description="$200/Day" />
                     
                      <Rate value={4}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Deck Boats "
                      style={{marginBottom:"20px"}}
                       actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img src="https://www.marineinsight.com/wp-content/uploads/2013/05/deckboat-1-768x463.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      <Meta title="As the name suggests" description="$80/Day" />
                      <Rate value={1}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Bowrider Boats"
                      style={{marginBottom:"20px"}}
                       actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img  src="https://www.marineinsight.com/wp-content/uploads/2013/05/bowrider-1.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      <Meta title="Known as a quintessential family boat" description="$299/Day" />
                      <Rate value={5}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Catamaran Boats"
                      style={{marginBottom:"20px"}}
                      actions={[
                        <SafetyOutlined style={{ fontSize: '20px', color: '#52c41a' }}/>,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img src="https://www.marineinsight.com/wp-content/uploads/2011/01/sailboat-catamaran.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      
                      <Meta title="Unlike other boats" description="$180/Day"  />
                      <Rate value={3}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Cuddy Cabins Boats"
                      style={{marginBottom:"20px"}}
                      actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img src="https://www.marineinsight.com/wp-content/uploads/2013/05/cuddy-cabin-boat.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      <Meta title="Essentially a boat that features" description="$200/Day" />
                      <Rate value={4}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Centre Console Boats "
                      style={{marginBottom:"20px"}}
                       actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img alt="example" src="https://www.marineinsight.com/wp-content/uploads/2013/05/center-console-boat-1.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      <Meta title="gunwale rod holders" description="$200/Day" />
                      <Rate value={1}  disabled/>
                    </Card>
                    </NavLink>
                  </Col>
                  <Col xl={6}>
                  <NavLink  to="/boatDetails">
                    <Card
                      title="Houseboats"
                      style={{marginBottom:"20px"}}
                       actions={[
                        <CheckCircleTwoTone twoToneColor="#52c41a" />,
                        <HeartTwoTone twoToneColor="#eb2f96" />,
                        <ShareAltOutlined />,
                      ]}
                      hoverable
                      cover={<img alt="example" src="https://www.marineinsight.com/wp-content/uploads/2012/09/modern-houseboat.jpg" style={{minHeight:"300px",objectFit:"cover"}}/>}
                    >
                      <Meta title="There are houseboats of different " description="$599/Day" />
                      <Rate value={5}  disabled/>
                    </Card>
                    </NavLink>
                  </Col> 
                </Row>

                <Pagination
                  style={{textAlign:"center", marginTop:"20px"}}
                  total={85}
                  showSizeChanger
                  showQuickJumper
                  showTotal={total => `Total ${total} items`}
                />
          </div>
       );
    }
 }

 export default BoatList;
 