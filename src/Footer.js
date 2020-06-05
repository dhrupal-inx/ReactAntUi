import React from 'react'
import { Layout , Col} from 'antd';
import { FacebookOutlined, GoogleOutlined, InstagramOutlined,LinkedinOutlined } from '@ant-design/icons';


const {  Footer } = Layout;
class FooterMain extends React.Component {
  render() {
    return (
      <div>
          <Footer className="footer-main">
            <Col align="middle"> <img style={{maxWidth:"250px"}} src={require('./assest/img/logo.svg')} /></Col>
            <Col align="middle">
              <FacebookOutlined style={{margin:"20px 5px 5px", fontSize:"25px"}}/>
              <GoogleOutlined style={{margin:"20px 5px 5px",fontSize:"25px"}}/>
              <InstagramOutlined style={{margin:"20px 5px 5px",fontSize:"25px"}}/>
              <LinkedinOutlined style={{margin:"20px 5px 5px",fontSize:"25px"}}/>
            </Col>
          </Footer>
      </div>
    )
  }
}
export default FooterMain