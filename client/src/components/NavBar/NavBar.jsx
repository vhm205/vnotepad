import React, { Fragment } from 'react';
import { useCookies } from 'react-cookie';
import { NavLink, useHistory } from 'react-router-dom';
import { httpLogout } from '../Service/Service';

const NavBar = () => {
	const [cookies, setCookie, removeCookie] = useCookies();
	const history = useHistory();

	const logout = async (e) => {
		e.preventDefault();

		const refreshToken = cookies.refreshToken;
		if (refreshToken) {
			await httpLogout(refreshToken);
			removeCookie('token');
			removeCookie('refreshToken');
			history.push('/login');
		}
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					Home
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
					<ul className="navbar-nav ml-auto">
						{!cookies.token ? (
							<Fragment>
								<li className="nav-item">
									<NavLink to="/login" className="nav-link">
										Login
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/register" className="nav-link">
										Register
									</NavLink>
								</li>
							</Fragment>
						) : (
							<Fragment>
								<li className="nav-item">
									<NavLink to="/profile" className="nav-link">
										Profile
									</NavLink>
								</li>
								<li className="nav-item">
									<a href="/" className="nav-link" onClick={logout}>
										Logout
									</a>
								</li>
							</Fragment>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
