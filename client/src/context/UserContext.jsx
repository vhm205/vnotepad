import React from 'react';
import { httpGetProfile, httpRefreshToken } from '../service/Service';
import { useCookies } from 'react-cookie';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = React.useState({});
	const [cookies, setCookie, removeCookie] = useCookies();

	React.useEffect(() => {
		(async () => {
			if (cookies.token) {
				try {
					const response = await httpGetProfile(cookies.token);
					setUser(response.data.user);
				} catch (error) {
					httpRefreshToken(cookies.refreshToken)
						.then((response) => {
							setCookie('token', response.data.token);
						})
						.catch(() => {
							removeCookie('token');
							removeCookie('refreshToken');
						});
				}
			}
		})();
	}, [cookies.token, cookies.refreshToken, setCookie, removeCookie]);

	return (
		<UserContext.Provider value={[user, setUser]}>
			{children}
		</UserContext.Provider>
	);
};
