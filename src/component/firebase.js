import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyB4J1oWywKBNEs6ZIDhFUU2oBq9elYw7DI",
    authDomain: "twitter-35136.firebaseapp.com",
    projectId: "twitter-35136",
    storageBucket: "twitter-35136.appspot.com",
    messagingSenderId: "842405851431",
    appId: "1:842405851431:web:c82f41ce0ea30b46dbf902"
  };
let app=firebase.initializeApp(firebaseConfig)

let db=app.firestore()
export let storage=app.storage()

export default db;