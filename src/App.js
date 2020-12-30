import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login';
import MainPage from './pages/main';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>
					<Route path="/main">
						<MainPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
