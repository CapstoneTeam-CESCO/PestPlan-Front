import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>
					<Route path="/home">
						<HomePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
