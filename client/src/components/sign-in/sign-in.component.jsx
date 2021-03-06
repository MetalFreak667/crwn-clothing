import React, { useState } from 'react';
import { ReactComponent as GoogleLogo } from '../../assets/google.svg';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart, facebookSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitleContainer, SignInButtonsContainer, GoogleIcon} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart, facebookSignInStart }) =>
{
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const handleSubmit = async event => { 
        event.preventDefault();        
        emailSignInStart({email, password});
    }

    const handleChange = event => { 
        const { value, name} = event.target;
        setCredentials({ ...value, [name]:value });
    }

    return (
        <SignInContainer>
            <SignInTitleContainer>I already have an account</SignInTitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
            
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='Email'
                    required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='Password'
                    required 
                />
                <SignInButtonsContainer>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                    <GoogleIcon></GoogleIcon>SIGN IN
                    </CustomButton>
                    <CustomButton type='button' onClick={facebookSignInStart} isGoogleSignIn >
                    <img  align="middle" height="30PX;" src="'../../face.png"></img>
                    SIGN IN
                    </CustomButton>
                    
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    );
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    facebookSignInStart: () => dispatch(facebookSignInStart()),
    emailSignInStart: ({email, password}) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);