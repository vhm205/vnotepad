import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Profile, NavBar } from './components';
import { useCookies } from 'react-cookie';

import Container from '@material-ui/core/Container';

const App = () => {
	const [cookies] = useCookies();
	return (
		<Container fixed>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/login" render={() => <Login />} />
					<Route path="/register" render={() => <Register />} />
					<Route path="/profile" render={() => <Profile />} />
					{/* {!cookies.token ? (
						<Fragment>
							<Route path="/login" render={() => <Login />} />
							<Route path="/register" render={() => <Register />} />
						</Fragment>
					) : (
						<Fragment>
							<Route path="/profile" render={() => <Profile />} />
						</Fragment>
					)} */}
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
