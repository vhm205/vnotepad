import React, { useState, useEffect, useCallback } from 'react';
import Cookies from 'universal-cookie';
import Avatar from 'avataaars';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStylesForProfile } from '../Styles';
import { httpGetProfile } from '../Service/Service';

const Profile = () => {
    const [info, setInfo] = useState({})
    const cookies = new Cookies();
    const classes = useStylesForProfile();

    const GetProfile = useCallback(async () => {
        const token = cookies.get('token')
        if(!token) return

        const { data: { body } } = await httpGetProfile(token)
        setInfo(body)
    }, [cookies])

    useEffect(() => {
        GetProfile()
    }, [])

    return (
        <Paper className={classes.root + ' d-flex'}>
            <Typography variant="h5" component="h3" className="col-4">
                <Card className={classes.card}>
                    <CardActionArea className="text-center">
                        <Avatar
                            style={{width: '100px', height: '100px'}}
                            avatarStyle='Circle'
                            topType='WinterHat1'
                            accessoriesType='Blank'
                            hatColor='Red'
                            hairColor='BrownDark'
                            facialHairType='Blank'
                            clotheType='BlazerShirt'
                            eyeType='Default'
                            eyebrowType='Default'
                            mouthType='Default'
                            skinColor='Light' />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {info.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className="mb-2">
                                {info.email}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Your ID: {info._id}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="text-center">
                        <Button size="large" color="secondary" className="btn-block">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </Typography>
            {Object.keys(info).length > 0 ? (
                <Typography component="form" className="col-6">
                    <h3>Infomation</h3>
                    <TextField className="mb-3" 
                                name="name" 
                                label="Name"
                                autoComplete="off"
                                defaultValue={info.name}
                                InputLabelProps={{ shrink: true }} 
                                fullWidth  />

                    <TextField className="mb-3" 
                                name="email" 
                                label="Email"  
                                autoComplete="off" 
                                defaultValue={info.email}
                                InputLabelProps={{ shrink: true }} 
                                fullWidth />
                    <TextField type="password" 
                                className="mb-3" 
                                name="password" 
                                label="Password" 
                                autoComplete="off"
                                defaultValue={info.password}  
                                InputLabelProps={{ shrink: true }} 
                                fullWidth />
                    <Button variant="contained" color="primary" className="float-right"> Save your profile </Button>
                </Typography>
            ) : null}
        </Paper>
    );
};

export default Profile;
