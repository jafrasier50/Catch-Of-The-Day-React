import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEttWNpUdAWPU_v776lwKIPPWZvp9zJSQ",
  authDomain: "market-of-the-seas.firebaseapp.com",
  databaseURL: "https://market-of-the-seas.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;