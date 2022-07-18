import React, { ChangeEvent, useState } from 'react';
import { SignUpFields } from '../../types/auth';
import { createAuthUser, createUserDocument } from '../../utils/firebase';
import FormInput from '../atoms/FormInput';
import '../../styles/components/sign-up-form/sign-up-form.scss';
import Button from '../atoms/Button';
import errorMessageMapper from '../../utils/errorMessageMapper';
import { FirebaseError } from 'firebase/app';

const SignUpForm: React.FC = () => {
    const [formFields, setFormFields] = useState<SignUpFields>({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        if (formFields.password !== formFields.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const authRes = await createAuthUser(formFields);
            await createUserDocument(authRes.user, { displayName: formFields.displayName });
            setFormFields({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            setError(errorMessageMapper(error as FirebaseError));
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    inputProps={{
                        required: true,
                        onChange: handleChange,
                        name: 'displayName',
                        value: formFields.displayName,
                    }}
                />

                <FormInput
                    label="Email"
                    inputProps={{
                        required: true,
                        onChange: handleChange,
                        name: 'email',
                        value: formFields.email,
                        type: 'email',
                    }}
                />

                <FormInput
                    inputProps={{
                        required: true,
                        onChange: handleChange,
                        name: 'password',
                        value: formFields.password,
                        type: 'password',
                    }}
                    label="Password"
                />
                <FormInput
                    inputProps={{
                        required: true,
                        onChange: handleChange,
                        name: 'confirmPassword',
                        value: formFields.confirmPassword,
                        type: 'password',
                    }}
                    label="Confirm password"
                />

                <Button
                    buttonProps={{
                        type: 'submit',
                    }}
                >
                    SIGN UP
                </Button>
                <p style={{ color: 'red' }}>{error}</p>
            </form>
        </div>
    );
};

export default SignUpForm;
