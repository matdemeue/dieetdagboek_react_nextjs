import React, { createContext, useContext, useState, useEffect } from 'react';
import auth from './firebase';


const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register/signup
    const signup = (email, password) => {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response.user)
            })
    }

    // login
    const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

    // logout
    const logout = () => auth.signOut();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                setUser(user);
                setLoading(false)
            }
            else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [])

    const value = {
        user,
        login,
        logout,
        signup
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}