
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCFeydeHCP6RFSpIHH-yZ52P32cMWKj65A",
    authDomain: "student-management-app-99ccf.firebaseapp.com",
    databaseURL: "https://student-management-app-99ccf-default-rtdb.firebaseio.com",
    projectId: "student-management-app-99ccf",
    storageBucket: "student-management-app-99ccf.appspot.com",
    messagingSenderId: "393102690464",
    appId: "1:393102690464:web:0f693cd1f2af743b69a1c5"
};

// Initialize Firebase
const FirebaseDb = firebase.initializeApp(firebaseConfig);


export default FirebaseDb.database().ref();