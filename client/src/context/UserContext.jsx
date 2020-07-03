import React from 'react';
import UserAPI from '../service/userApi';
import { useCookies } from 'react-cookie';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = React.useState({});
	const [cookies, setCookie, removeCookie] = useCookies();

	React.useEffect(() => {
		(async () => {
			if (cookies.token) {
				const userApi = new UserAPI(cookies.token);
				try {
					const response = await userApi.getProfile();
					setUser(response.user);
				} catch (error) {
					UserAPI.refreshToken(cookies.refreshToken)
						.then((response) => {
							setCookie('token', response.token);
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
