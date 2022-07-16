import React from 'react';
import LoginForm from '../organisms/LoginForm';
import SignUpForm from '../organisms/SignUpForm';
import '../../styles/components/login-page/login-page.scss';
const Login = () => {
    return (
        <div className="container">
            <LoginForm />
            <SignUpForm />
        </div>
    );
};

export default Login;
