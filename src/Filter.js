import React, { useState } from 'react';
import { Input, Collapse, Select, Rate, Radio, Slider, DatePicker, Drawer, Button } from 'antd';
import {
    UserOutlined,
    EnvironmentOutlined, CalendarOutlined, DollarCircleOutlined,
    StarOutlined, TeamOutlined, FilterOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;
const { RangePicker } = DatePicker;
const { Option } = Select;


function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}

class Filter extends React.Component {
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

            <div>

                <Button type="primary" onClick={this.showDrawer} style={{ marginBottom: "20px" }}><FilterOutlined /> Filter </Button>
                <Drawer
                    title="Advance Filter"
                    placement="left"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={350}
                >
                    <Collapse
                        style={{ marginBottom: '10px' }}
                        expandIcon={({ isActive }) => <EnvironmentOutlined style={{ fontSize: '18px', color: '#222' }} />}>
                        <Panel header="Location" key="1" style={{ fontSize: '16px', fontWeight: '500', color: '#222' }}>
                            <div><Input placeholder="Search Location" size="large" /> </div>
                        </Panel>
                    </Collapse>

                    <Collapse
                        style={{ marginBottom: '10px' }}
                        expandIcon={({ isActive }) => <CalendarOutlined style={{ fontSize: '18px', color: '#222' }} />}>
                        <Panel header="Select Date" key="2" style={{ fontSize: '16px', fontWeight: '500', color: '#222' }}>
                            <div><RangePicker size="large" /></div>
                        </Panel>
                    </Collapse>

                    <Collapse
                        style={{ marginBottom: '10px' }}
                        expandIcon={({ isActive }) => <TeamOutlined style={{ fontSize: '18px', color: '#222' }} />}>
                        <Panel header="Select Passenger" key="3" style={{ fontSize: '16px', fontWeight: '500', color: '#222' }}>
                            <div><Select defaultValue="1" style={{ width: '100%' }} size="large">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                            </Select></div>
                        </Panel>

                    </Collapse>

                    <Collapse
                        style={{ marginBottom: '10px' }}
                        expandIcon={({ isActive }) => <UserOutlined style={{ fontSize: '18px', color: '#222' }} />}>
                        <Panel header="Select Capton" key="4" style={{ fontSize: '16px', fontWeight: '500', color: '#222' }}>
                            <div>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value="a">With Capton</Radio.Button>
                                    <Radio.Button value="b">Without Capton</Radio.Button>
                                </Radio.Group>
                            </div>
                        </Panel>
                    </Collapse>

                    <Collapse
                        style={{ marginBottom: '10px' }}
                        expandIcon={({ isActive }) => <StarOutlined style={{ fontSize: '18px', color: '#222' }} />}>

                        <Panel header="Select Rating" key="5" style={{ fontSize: '16px', fontWeight: '500', color: '#222' }}>
                            <div><Rate /></div>
                        </Panel>
                    </Collapse>

                    <Collapse
                        style={{ marginBottom: '10px' }}
                        expandIcon={({ isActive }) => <DollarCircleOutlined style={{ fontSize: '18px', color: '#222' }} />}>
                        <Panel header="Select Price" key="6" style={{ fontSize: '16px', fontWeight: '500', color: '#222' }}>
                            <div>
                                <Slider
                                    range
                                    step={1}
                                    defaultValue={[0, 100]}
                                    onAfterChange={onAfterChange}
                                />
                            </div>
                        </Panel>
                    </Collapse>
                </Drawer>



            </div>
        )
    }
}

export default Filter;