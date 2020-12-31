import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login';
import MainPage from './pages/main';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route path="/main" component={MainPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
