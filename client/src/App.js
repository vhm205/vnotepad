import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
	Login,
	Register,
	NavBar,
	Profile,
	ResetPassword,
	Notes,
	NoteDetail,
} from './components';
import { PrivateRouter, PublicRouter } from './router';
import { UserProvider } from './context/UserContext';
import Container from '@material-ui/core/Container';

const App = () => {
	return (
		<UserProvider>
			<Container>
				<Router>
					<NavBar />
					<Switch>
						<PublicRouter path="/login" component={Login} />
						<PublicRouter path="/register" component={Register} />
						<PrivateRouter path="/profile" component={Profile} />
						<PrivateRouter path="/reset-password" component={ResetPassword} />
						<PrivateRouter path="/notes" component={Notes} />
						<PrivateRouter path="/create/note" component={NoteDetail} />
					</Switch>
				</Router>
			</Container>
		</UserProvider>
	);
};

export default App;
