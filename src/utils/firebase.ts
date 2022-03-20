import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, UserCredential } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'tenno-ecom.firebaseapp.com',
    projectId: 'tenno-ecom',
    storageBucket: 'tenno-ecom.appspot.com',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async (credential: UserCredential) => {
    const userDocRef = doc(db, 'users', credential.user.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (userSnapshot.exists()) {
        return userDocRef;
    }

    const { displayName, email } = credential.user;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
        });
    } catch (err) {
        console.error('Error while creating user', err);
    }
};
