import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitleContainer, SignInButtonsContainer} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) =>
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
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    );
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ({email, password}) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);