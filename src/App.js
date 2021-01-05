import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route path="/login" component={LoginPage} />
					<Route path="/home" component={HomePage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
