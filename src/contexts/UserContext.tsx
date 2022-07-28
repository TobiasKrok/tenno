import { User } from 'firebase/auth';
import React, { createContext, PropsWithChildren, useEffect, useReducer } from 'react';
import { createUserDocument, onAuthStateChangedListener } from '../utils/firebase';

export const UserContext = createContext<{
    currentUser: User | null;
    setCurrentUser: (user: User) => void;
}>({
    currentUser: null,
    setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
    SET_USER: 'SET_USER',
};

const userReducer = (
    state: { currentUser: User | null },
    action: { type: string; payload: User | null },
): { currentUser: User | null } => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled action type: ${type} in userReducer`);
    }
};

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, { currentUser: null });

    const setCurrentUser = (user: User | null) => {
        dispatch({ type: USER_ACTION_TYPES.SET_USER, payload: user });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            if (user) {
                createUserDocument(user);
            }
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};
