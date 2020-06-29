import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticate } from '../authenticate/authUser';

export default ({ component: Component, ...rest }) => {
	const [cookies] = useCookies();

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticate(cookies) ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};
