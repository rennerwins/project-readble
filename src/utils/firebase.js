import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCd1IYiTkR5kyTp0R6BVt-XmZ5JqzfYu6k',
  authDomain: 'project-firestore.firebaseapp.com',
  databaseURL: 'https://project-firestore.firebaseio.com',
  projectId: 'project-firestore',
  storageBucket: 'project-firestore.appspot.com',
  messagingSenderId: '254202992789',
};

export const firebaseApp = firebase.initializeApp(config);
