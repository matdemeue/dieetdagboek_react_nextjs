import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGESENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();

export default auth;