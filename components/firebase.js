import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

// import * as firebase from 'firebase';

// var config = {
//   apiKey: 'AIzaSyA_mah1PZ2tAtIywveF12Nvu1U01tdcqX4',
//   authDomain: 'homeynote-ab417.firebaseapp.com',
//   databaseURL: 'https://homeynote-ab417.firebaseio.com',
//   projectId: 'homeynote-ab417',
//   storageBucket: 'homeynote-ab417.appspot.com',
//   messagingSenderId: '275232622097',
//   appId: '1:275232622097:web:4f67ec75ec1c880a0e93b0',
//   measurementId: 'G-6NWM32FXEJ',
// };

// export const firebaseApp = firebase.initializeApp(config);
