import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import './App.scss';
import Sidebar from './components/organisms/sidebar';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import PacketsPage from './pages/packets';
import DevicesPage from './pages/devices';
import DeviceDetailsPage from './pages/deviceDetails';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={LoginPage} />

                <div className="App-main">
                    <Route
                        render={({ location: { pathname } }) =>
                            pathname !== '/login' ? (
                                <Sidebar currentPath={pathname} />
                            ) : null
                        }
                    />
                    <Route path="/home">
                        <Redirect to="/dashboard" />
                    </Route>
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/packets" component={PacketsPage} />
                    <Route exact path="/devices" component={DevicesPage} />
                    <Route
                        path="/devices/details/:id"
                        component={DeviceDetailsPage}
                    />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
