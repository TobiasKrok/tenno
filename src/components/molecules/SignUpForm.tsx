import React, { ChangeEvent, useState } from 'react';
import { SignUpFields } from '../../types/auth';
import { createAuthUser, createUserDocument } from '../../utils/firebase';
import FormInput from '../atoms/FormInput';
import '../../styles/components/sign-up-form/sign-up-form.scss';
import Button from '../atoms/Button';

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
            await createUserDocument(authRes, { displayName: formFields.displayName });
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={formFields.displayName}
                />

                <FormInput
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formFields.email}
                    label="Email"
                />

                <FormInput
                    type="password"
                    label="Password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={formFields.password}
                />
                <FormInput
                    type="password"
                    label="Confirm password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formFields.confirmPassword}
                />

                <Button type="submit"> SIGN UP</Button>
                <p style={{ color: 'red' }}>{error}</p>
            </form>
        </div>
    );
};

export default SignUpForm;
