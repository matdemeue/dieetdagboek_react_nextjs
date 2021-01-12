import '../styles/globals.css'
import '../public/dev-assets/css/main.css'
import { AuthProvider } from '../firebase/auth';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>
}

export default MyApp;
