import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Seed the database somehow

//Need config
const config = {
  apiKey: "AIzaSyBJjSPNtV7P4pOX8yUxznaVhltjtiBPYlw",
  authDomain: "netflix-clone-86161.firebaseapp.com",
  databaseURL: "https://netflix-clone-86161.firebaseio.com",
  projectId: "netflix-clone-86161",
  storageBucket: "netflix-clone-86161.appspot.com",
  messagingSenderId: "1017579546945",
  appId: "1:1017579546945:web:6a384ca2c55690560799c0"
};
const firebase = Firebase.initializeApp(config);

export { firebase };