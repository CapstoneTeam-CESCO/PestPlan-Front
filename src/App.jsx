import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import './App.scss';
import Sidebar from './components/organisms/sidebar';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import PacketsPage from './pages/packets';
import DevicesPage from './pages/devices';
import DeviceDetailsPage from './pages/deviceDetails';
import * as Constants from './constants/Constants';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <Redirect to={Constants.LOGIN_PATH} />
                </Route>
                <Route path={Constants.LOGIN_PATH} component={LoginPage} />

                <div className="App-main">
                    <Route
                        render={({ location: { pathname } }) =>
                            pathname !== Constants.LOGIN_PATH ? (
                                <Sidebar currentPath={pathname} />
                            ) : null
                        }
                    />
                    <Route path={Constants.HOME_PATH}>
                        <Redirect to={Constants.DASHBOARDS_PATH} />
                    </Route>
                    <Route
                        path={Constants.DASHBOARDS_PATH}
                        component={DashboardPage}
                    />
                    <Route
                        path={Constants.PACKETS_PATH}
                        component={PacketsPage}
                    />
                    <Route
                        exact
                        path={Constants.DEVICES_PATH}
                        component={DevicesPage}
                    />
                    <Route
                        path={`${Constants.DEVICES_DETAILS_PATH}/:id`}
                        component={DeviceDetailsPage}
                    />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
