import React, { Fragment } from 'react';
import { useCookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import { isAuthenticate } from '../../authenticate/authUser';
import UserAPI from '../../service/userApi';

const NavBar = () => {
	const [cookies, , removeCookie] = useCookies();

	const logout = async (e) => {
		e.preventDefault();

		const refreshToken = cookies.refreshToken;
		if (refreshToken) {
			await UserAPI.logout(refreshToken);
			removeCookie('token');
			removeCookie('refreshToken');
		}
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<NavLink to="/" className="navbar-brand">
					Home
				</NavLink>
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
						{!isAuthenticate(cookies) ? (
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
									<NavLink to="/notes" className="nav-link">
										Notes
									</NavLink>
								</li>
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
