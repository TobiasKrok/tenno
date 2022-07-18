import { User } from 'firebase/auth';
import React, { createContext, PropsWithChildren, useState, useEffect } from 'react';
import { createUserDocument, onAuthStateChangedListener } from '../utils/firebase';

export const UserContext = createContext<{
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            if (user) {
                createUserDocument(user);
            }
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
