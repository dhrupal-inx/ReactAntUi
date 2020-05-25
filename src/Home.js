import React from 'react'
import BoatList from './boatlist'
import Filter from './Filter'

import { Layout, Carousel, Row, Col   } from 'antd';
const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const {  Content, Footer } = Layout;
class Home extends React.Component {
  render() {
    return (
        <div>
            
          <div className="site-layout-background" style={{paddingTop:"64px"}}>
            <Carousel  {...props}>
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
          <Content className="site-layout" style={{ padding: '30px 50px', background: '#fff' }}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                
              <Filter />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <BoatList />
              </Col>

            </Row>

            
          </Content>
            </div>
    )
  }
}
export default Home