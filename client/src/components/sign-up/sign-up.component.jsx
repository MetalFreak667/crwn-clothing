import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpTitleContainer, SignUpContainer } from './sign-up.styles';

const SignUp = ({signUpStart}) =>
{ 
    const [userCredentials, setCredentials] =
    useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });
     
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => { 
        event.preventDefault();
        signUpStart({ displayName, email, password, confirmPassword });
    }

    const handleChange = event => { 
        const { value, name} = event.target;
        setCredentials({ ...userCredentials, [name]:value });
    }
    
    return(
        <SignUpContainer>
            <SignUpTitleContainer>I do not have a account</SignUpTitleContainer>
            <span>Sign up with your e-mail and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName' 
                    type='text' 
                    value={displayName} 
                    handleChange={handleChange}
                    label='Display name'
                    required 
                />
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
                <FormInput 
                    name='confirmPassword' 
                    type='password' 
                    value={confirmPassword} 
                    handleChange={handleChange}
                    label='Confirm password'
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>
                </form>
        </SignUpContainer>
    )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: ({ displayName, email, password, confirmPassword }) => dispatch(signUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);