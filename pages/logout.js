import React, { useEffect } from 'react';
import { useAuth } from '../firebase/auth';
import { useRouter } from 'next/router';

const LogoutPage = () => {
    const { logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        logout();
        router.push('/login');
    }, []);

    return(
        <></>
    );
};

export default LogoutPage;