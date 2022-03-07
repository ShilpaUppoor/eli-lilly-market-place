import React from 'react';
import { Button, Space, Typography } from 'antd';

const Dashboard = () => {
    return (
        <div style={{ alignContent: 'center' }}>
            <Typography.Title level={1}>Dashboard</Typography.Title>
            <Space>
                <Button type='primary'>List All Repos</Button>
                <Button type='default'>List of Activities</Button>
            </Space>
        </div>
    );
};

export default Dashboard;
