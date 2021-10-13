import firebase from "firebase"

const firebaseConfig = {
    apiKey: "SECRET",
    authDomain: "slack-clone-app-515d8.firebaseapp.com",
    projectId: "slack-clone-app-515d8",
    storageBucket: "slack-clone-app-515d8.appspot.com",
    messagingSenderId: "645625028707",
    appId: "1:645625028707:web:482a700881466c701b5856"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;

