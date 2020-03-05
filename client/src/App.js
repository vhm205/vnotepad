import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Cookies from 'universal-cookie';
import Nav from './components/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

function App() {
	const cookies = new Cookies()

	return (
		<Container fixed={true}>
			<Router>
				<Nav />

				<Switch>
					{!cookies.get('token') ? (
						<Fragment>
							<Route path='/login'>
								<Login />
							</Route>

							<Route path='/register'>
								<Register />
							</Route>
						</Fragment>
					) : (
						<Fragment>
							<Route path='/profile'>
								<Profile />
							</Route>
						</Fragment>
					)}
				</Switch>
			</Router>
		</Container>
  );
}

export default App;
