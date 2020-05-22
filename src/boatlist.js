import React from 'react';
import { Row, Col, Card, Rate } from 'antd';
import { ShareAltOutlined ,CheckCircleTwoTone,HeartTwoTone, SafetyOutlined} from '@ant-design/icons';
const { Meta } = Card;

class BoatList extends React.Component {
    
    render() {
       return (
          <div>
            
            <Row gutter={16}>
                  <Col xl={6}>
                 
                    <Card
                      title="Lorem ipsum "
                      style={{marginBottom:"20px"}}
                      actions={[
                        <SafetyOutlined style={{ fontSize: '20px', color: '#52c41a' }}/>,
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
                      style={{marginBottom:"20px"}}
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
                      style={{marginBottom:"20px"}}
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
                      style={{marginBottom:"20px"}}
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
                  <Col xl={6}>
                    <Card
                      title="Lorem ipsum "
                      style={{marginBottom:"20px"}}
                      actions={[
                        <SafetyOutlined style={{ fontSize: '20px', color: '#52c41a' }}/>,
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
                      style={{marginBottom:"20px"}}
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
                      style={{marginBottom:"20px"}}
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
                      style={{marginBottom:"20px"}}
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
          </div>
       );
    }
 }

 export default BoatList;
 