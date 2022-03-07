import React from 'react';
import { Button, Tooltip } from 'antd';

const Home = () => {
    console.log('Home');
    return (
        <>
            <Tooltip title='Login with github'>
                <Button type='primary'>Login</Button>
            </Tooltip>
        </>
    );
};

export default Home;
