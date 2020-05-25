import React from 'react';
import { Layout, Carousel, Row, Col   } from 'antd';

import './App.scss';

import HeaderMain from './header.js'
import BoatList from './boatlist.js'
import Filter from './Filter.js'
import BoatDetails from './BoatDetails.js'

const {  Content, Footer } = Layout;


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
          <HeaderMain />

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
         

          <Content className="site-layout" style={{ padding: '30px 50px', background: '#fff' }}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                
              <Filter />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <BoatList />
              </Col>

            </Row>

            <BoatDetails />
          </Content>

                      

          <Footer style={{ textAlign: 'center' }}>Boatfuji ©2020</Footer>


         
        </Layout>



      </div>
    );
  }
}




export default App;
