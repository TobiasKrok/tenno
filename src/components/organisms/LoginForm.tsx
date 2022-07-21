import React, { useState } from 'react';
import Button from '../atoms/Button';
import FormInput from '../atoms/FormInput';
import '../../styles/components/login-form/login-form.scss';
import { loginEmailPassword, signInWithGooglePopup } from '../../utils/firebase';
import { FirebaseError } from 'firebase/app';
import errorMessageMapper from '../../utils/errorMessageMapper';

const LoginForm: React.FC = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setError(null);
            await loginEmailPassword(credentials.email, credentials.password);
            setCredentials({ email: '', password: '' });
        } catch (error) {
            setError(errorMessageMapper(error as FirebaseError));
        }
    };

    const loginGoogle = async () => {
        try {
            await signInWithGooglePopup();
            setCredentials({ email: '', password: '' });
        } catch (error) {
            setError(errorMessageMapper(error as FirebaseError));
        }
    };

    return (
        <div className="login-container">
            <h2>I already have an account</h2>
            <span>Sign in with email/password or Google </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    inputProps={{
                        required: true,
                        onChange: handleChange,
                        name: 'email',
                        value: credentials.email,
                        type: 'email',
                    }}
                />
                <FormInput
                    label="Password"
                    inputProps={{
                        required: true,
                        onChange: handleChange,
                        name: 'password',
                        value: credentials.password,
                        type: 'password',
                    }}
                />
                <div className="button-group">
                    <Button
                        buttonProps={{
                            type: 'submit',
                        }}
                    >
                        SIGN IN
                    </Button>
                    <Button
                        buttonProps={{
                            type: 'button',
                            onClick: loginGoogle,
                        }}
                        class="google"
                    >
                        SIGN IN WITH GOOGLE
                    </Button>
                </div>
                <div style={{ color: 'red' }}>{error}</div>
            </form>
        </div>
    );
};

export default LoginForm;
