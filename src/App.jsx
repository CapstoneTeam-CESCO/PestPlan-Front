import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import './App.css';
import Header from './components/organisms/header';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PacketsPage from './pages/packets';
import DevicesPage from './pages/devices';
import DeviceDetailsPage from './pages/deviceDetails';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route
                    render={({ location }) =>
                        location.pathname !== '/login' ? <Header /> : null
                    }
                />
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/packets" component={PacketsPage} />
                <Route exact path="/devices" component={DevicesPage} />
                <Route
                    path="/devices/details/:id"
                    component={DeviceDetailsPage}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
