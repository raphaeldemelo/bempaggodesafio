import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyD1QWKvWHkJUdXlYEc5HlNxTgAvhk5sr3A",
    authDomain: "desafiobempaggo.firebaseapp.com",
    projectId: "desafiobempaggo",
    storageBucket: "desafiobempaggo.appspot.com",
    messagingSenderId: "228542687539",
    appId: "1:228542687539:web:c4f036e12e72aae1e57646",
    measurementId: "G-HS1BS9HB39"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;