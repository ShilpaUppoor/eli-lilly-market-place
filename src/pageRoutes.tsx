import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './app-components/home-component';
import Dashboard from './app-components/dashboard-component';
import { routeMap } from './const';

const PageRoutes = () => {
    return (
        <Switch>
            <Route exact path={routeMap.home} component={Home} />
            <Route path={routeMap.dashboard} component={Dashboard} />
        </Switch>
    );
};

export default PageRoutes;
