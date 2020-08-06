import * as firebase from 'firebase'


  const firebaseConfig = {
    apiKey: "AIzaSyBMBZM9ronprOvV-yZj-R0yZiLwVAsveAc",
    authDomain: "vikoba-d125d.firebaseapp.com",
    databaseURL: "https://vikoba-d125d.firebaseio.com",
    projectId: "vikoba-d125d",
    storageBucket: "vikoba-d125d.appspot.com",
    messagingSenderId: "921164129662",
    appId: "1:921164129662:web:9a35c19b52235355b77f2f",
  };

 const Firebase = firebase.initializeApp(firebaseConfig)

  export default Firebase;