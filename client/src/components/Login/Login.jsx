import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Copyright, alertInfo, setExpiresCookies, useStylesForSignUp } from '../Styles';
import { httpLogin } from '../Service/Service';
import { NavLink } from 'react-router-dom';
import { isEmail, isEmpty  } from 'validator';

const Login = () => {
    const cookies = new Cookies()
    const classes = useStylesForSignUp()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState([])

    useEffect(() => {
        const email = cookies.get('email')
        const pass = cookies.get('password')
        if(email){
            setEmail(email)
            setPass(pass)
            setRemember(true)
        }
    }, [])

    const clickLogin = async () => {
        const stateCopy = { ...error }

        stateCopy.email = !isEmail(email) ? 'Invalid the email address' : ''
        stateCopy.password = isEmpty(password) ? 'This field is required' : ''

        setError(stateCopy)

        for (const [, value] of Object.entries(stateCopy)) {
            if(value !== '') return
        }
        
        try {
            const res = await httpLogin({ email, password })
            const time = setExpiresCookies(2)
            
            if(remember) {
                cookies.set('email', email, { path: '/', expires: time  })
                cookies.set('password', password, { path: '/', expires: time })
            } else{
                cookies.remove('email')
                cookies.remove('password')
            }
            cookies.set('token', res['data'].token, { path: '/', expires: time })
                
            Swal.fire({
                icon: 'info',
                title: 'Info',
                text: 'Login successfully!!',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = '/profile'
            })
        } catch (error) {
            alertInfo('Warning', 'Email or password is wrong!!', 'warning')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form}>
                    <TextField
                        autoFocus
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        helperText={error.email}
                        error={error.email && error.email.length > 0 ? true : false}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPass(e.target.value)}
                        helperText={error.password}
                        error={error.password && error.password.length > 0 ? true : false}
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" 
                                            value={remember}
                                            checked={remember}
                                            onChange={e => !remember ? setRemember(true) : setRemember(false)} />}
                        label="Remember me"
                        />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={clickLogin}
                        >
                    Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <NavLink to="/register">
                                {"You don't have an account? Sign Up"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright Typography={Typography} Link={Link} />
            </Box>
      </Container>
    );
};


export default Login;
