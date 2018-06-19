import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC21bxmgF2tD5sQJtH3Ls3bLjqpMf9L2a0',
  authDomain: 'word-up-48b85.firebaseapp.com',
  databaseURL: 'https://word-up-48b85.firebaseio.com',
  projectId: 'word-up-48b85',
  storageBucket: '',
  messagingSenderId: '924832643294',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
