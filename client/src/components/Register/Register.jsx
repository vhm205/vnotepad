import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Copyright, alertInfo, useStylesForSignUp } from '../Styles';
import { httpRegister } from '../Service/Service';
import { NavLink } from 'react-router-dom';
import { isEmail, isEmpty  } from 'validator';

const Register = () => {
    const classes = useStylesForSignUp()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [error, setError] = useState([])

    const clickRegister = async e => {
      const stateCopy = {...error}

      stateCopy.email = !isEmail(email) ? 'Invalid email format' : ''
      stateCopy.name = isEmpty(name) ? 'This field is required' : ''
      stateCopy.password = password.length < 6 ? 'Password must be at least 6 characters long' : ''

      setError(stateCopy)

      for (const [, value] of Object.entries(stateCopy)) {
        if(value !== '') return
      }

      try {
        await httpRegister({name, email, password})

        alertInfo('Infomation', 'Register done!!', 'info')
        setName('')
        setEmail('')
        setPass('')
      } catch (error) {
        alertInfo('Error', 'Register failse!!', 'error')
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
            Sign Up
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
              helperText={error.name}
              error={error.name && error.name.length > 0 ? true : false}
            />
            <TextField
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
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={clickRegister}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <NavLink to="/login">
                  {"Have an account? Sign In"}
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

export default Register;
