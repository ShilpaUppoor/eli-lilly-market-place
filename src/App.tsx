import React from 'react';
import 'antd/dist/antd.css';
import { Button, Tooltip } from 'antd';

import logo from './logo.svg';
import './App.scss';
import PageRoutes from './pageRoutes';

const App = () => {
    return (
        <div className='App'>
            <PageRoutes />
        </div>
    );
};

export default App;
