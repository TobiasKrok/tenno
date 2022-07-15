import { UserCredential } from 'firebase/auth';

export type SignUpFields = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type FireBaseConfig = {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
};

export type UserDocumentCredentials = SignUpFields & UserCredential;
