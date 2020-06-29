import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Login, Register, NavBar, Profile, ResetPassword } from './components';
import { PrivateRouter, PublicRouter } from './router';
import Container from '@material-ui/core/Container';

const App = () => {
	return (
		<Container>
			<Router>
				<NavBar />
				<Switch>
					<PublicRouter path="/login" component={Login} />
					<PublicRouter path="/register" component={Register} />
					<PrivateRouter path="/profile" component={Profile} />
					<PrivateRouter path="/reset-password" component={ResetPassword} />
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
