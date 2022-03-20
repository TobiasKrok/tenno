import React from 'react';
import { signInWithGooglePopup, createUserDocument } from '../../utils/firebase';
const Login = () => {
    const loginGoogle = async () => {
        const response = await signInWithGooglePopup();

        const userDocRef = await createUserDocument(response);
    };
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={loginGoogle}>Sign in Popup</button>
        </div>
    );
};

export default Login;
