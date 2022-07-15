import React from 'react';
import { signInWithGooglePopup, createUserDocument } from '../../utils/firebase';
import SignUpForm from '../molecules/SignUpForm';
const Login = () => {
    const loginGoogle = async () => {
        const response = await signInWithGooglePopup();
    };

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={loginGoogle}>Sign in Popup</button>
            <SignUpForm />
        </div>
    );
};

export default Login;
