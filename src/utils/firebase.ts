import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';
import { FireBaseConfig, SignUpFields } from '../types/auth';
import { VerifiedDocument, CategoryDocument } from '../types/firestore';
import { Product } from '../types/products';

const firebaseConfig: FireBaseConfig = {
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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const loginEmailPassword = async (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

export const db = getFirestore();

export const createUserDocument = async (user: User, additional?: Record<string, unknown>) => {
    const userDocRef = doc(db, 'users', user.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        return userDocRef;
    }

    const { displayName, email } = user;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additional,
        });
    } catch (err) {
        console.error('Error while creating user', err);
    }
};

export const signOutUser = async () => await signOut(auth);

export const createAuthUser = async (credentials: SignUpFields) =>
    await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

export const onAuthStateChangedListener = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey: string, objects: Array<VerifiedDocument>) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objects.forEach((obj) => {
        const documentRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(documentRef, obj);
    });
    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categories = querySnapshot.docs.reduce((acc: Record<string, Product[]>, docSnapshot) => {
        const { title, items } = docSnapshot.data() as CategoryDocument;
        acc[title] = items;
        return acc;
    }, {});

    return categories;
};
