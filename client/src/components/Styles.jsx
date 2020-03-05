import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
// import { red } from '@material-ui/core/colors';

export const Copyright = ({ Typography, Link }) => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://vhmblog102.000webhostapp.com" target="_blank">
          Your Website
        </Link>
        {' ' + new Date().getFullYear() + '.'}
      </Typography>
    );
}

export const alertInfo = (title, text, icon = 'info', showConfirmButton = false, timer = 1500) => {
  return Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: showConfirmButton,
            timer: timer
        })
}

export const setExpiresCookies = (exdays) => {
  const date = new Date()
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000))
  return date
}

export const useStylesForProfile = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
}));

export const useStylesForSignUp = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));