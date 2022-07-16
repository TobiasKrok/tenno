import { FirebaseError } from 'firebase/app';

export default function errorMessageMapper(error: FirebaseError) {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'Email already in use';
        case 'auth/invalid-email':
            return 'Invalid email';
        case 'auth/user-not-found':
            return 'User does not exist';
        case 'auth/wrong-password':
            return 'Password is incorrect';
        default:
            return 'Something went wrong: ' + error.code;
    }
}
