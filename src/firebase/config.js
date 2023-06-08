import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJYzx2G2sZUM3jaSzhMh3_Cy8T0P_a56s",
  authDomain: "job-listing-78eba.firebaseapp.com",
  projectId: "job-listing-78eba",
  storageBucket: "job-listing-78eba.appspot.com",
  messagingSenderId: "768256866600",
  appId: "1:768256866600:web:eaab4157049877add8381d"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase, firestore, app};