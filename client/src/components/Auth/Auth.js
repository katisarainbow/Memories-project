import React, { useState } from 'react';
import { Avatar, Typography, Button, Paper, Grid, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from "react-google-login";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup, signin } from '../../actions/auth';

import useStyles from './styles';
import Input from './Input';
import Icon from './Icon';
import { AUTH } from '../../constants/actionTypes';

const initState = { firstName:'', lastName:'', email:'', password:'', confirmPassword:''}

const Auth = () => {
    
    const [ showPassword, setShowPassword ] = useState(false);
    const [ isSignup, setIsSignUp ] = useState(false);
    const [ formData, setFormData ] = useState(initState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleShowPassword = () => {
        setShowPassword(!showPassword) 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = (event) => {
        setFormData( {...formData, [event.target.name]: event.target.value })
    };

    const switchMode = () => {
        setFormData(initState);
        setIsSignUp((prevState) => !prevState);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    };
    
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In Was Unsuccessful. Try Again Later.')
    };


        return(
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                                </>
                            )
                        }

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                   
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin 
                        clientId='463656616621-dejpbhrclngoap8m4pg7vkecb38h7hma.apps.googleusercontent.com'
                        render={renderProps => (
                        <Button
                         className={classes.googleButton}
                         color="primary"
                         fullWidth
                         onClick={renderProps.onClick}
                         disabled={renderProps.disabled}
                         startIcon={<Icon />}
                         variant="contained">Google Sign In</Button>
                        )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin' />
                    <Grid>
                        <Grid>
                            <Button onClick={switchMode} > 
                                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        )
    }

export default Auth;