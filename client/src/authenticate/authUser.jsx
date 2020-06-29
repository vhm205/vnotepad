export const isAuthenticate = (cookies) => {
	return !!(cookies.token || cookies.refreshToken);
};
