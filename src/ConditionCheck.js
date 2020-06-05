import React from 'react'
import { Tabs,Layout,Card, Typography, Divider  } from 'antd';
import GaugeChart from 'react-gauge-chart'

const { TabPane } = Tabs;
const { Content } = Layout;
const { Title } = Typography;


class ConditionCheck extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "64px" }}>
           <Content className="site-layout" style={{ padding: '30px 50px', background: '#f1f3fa' }}>
           <Card bordered={false} style={{ width: "80%", margin: "0 auto", marginTop: "30px" }}>
         <Tabs tabPosition={"left"} type="card" >
          <TabPane tab="Fuel Check" key="1" >
           <div>
           <Title level={2} style={{textAlign:"center"}}>Fuel Check</Title>
           <Divider />
           <GaugeChart id="gauge-chart3" 
            nrOfLevels={20} 
            colors={['#EA4228' , '#F5CD19', '#5BE12C' ]}
            arcWidth={0.20} 
            percent={0.10} 
          />
         
           </div>
          </TabPane>
          <TabPane tab="Oil Check" key="2">
          <Title level={2} style={{textAlign:"center"}}>Oil Check</Title>
           <Divider />
           <GaugeChart id="gauge-chart4" 
            nrOfLevels={20} 
            colors={['#EA4228' , '#F5CD19', '#5BE12C' ]}
            arcWidth={0.20} 
            percent={0.80} 
          />
          </TabPane>
          <TabPane tab="Hull Condition" key="3">
            <Title level={2} style={{textAlign:"center"}}>Hull Condition</Title>
           <Divider />          </TabPane>
          <TabPane tab="Life Jackets" key="4">
            <Title level={2} style={{textAlign:"center"}}>Life Jackets</Title>
           <Divider />
          </TabPane>
          <TabPane tab="Furnishing, Seat Coverings" key="5">
            <Title level={2} style={{textAlign:"center"}}>Furnishing, Seat Coverings</Title>
           <Divider />          </TabPane>
          <TabPane tab="Fire Extinguishers" key="6">
            <Title level={2} style={{textAlign:"center"}}>Fire Extinguishers</Title>
           <Divider />          </TabPane>
          <TabPane tab="Flares" key="7">
            <Title level={2} style={{textAlign:"center"}}>Flares</Title>
           <Divider />          </TabPane>
          <TabPane tab="Charts, Navigation" key="8">
            <Title level={2} style={{textAlign:"center"}}>Charts, Navigation</Title>
           <Divider />          </TabPane>
          <TabPane tab="Other Electronic Equipment" key="9">
            <Title level={2} style={{textAlign:"center"}}>Other Electronic Equipment</Title>
           <Divider />          </TabPane>
          <TabPane tab="Engine and Propellers" key="10">
            <Title level={2} style={{textAlign:"center"}}>Engine and Propellers</Title>
           <Divider />
          </TabPane>
          <TabPane tab="Lines, Masts, and Sails" key="11">
            <Title level={2} style={{textAlign:"center"}}>Lines, Masts, and Sails</Title>
           <Divider />
          </TabPane>
          <TabPane tab="Anchors" key="12">
            <Title level={2} style={{textAlign:"center"}}>Anchors</Title>
           <Divider />
          </TabPane>
        </Tabs>
        </Card>
        </Content>
      </div>
    )
  }
}
export default ConditionCheck