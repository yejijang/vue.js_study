import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3n3j-lWfvLHuxSRw9LjcXOsQtSrXGDuc",
    authDomain: "ponyo-jyj.firebaseapp.com",
    databaseURL: "https://ponyo-jyj.firebaseio.com",
    projectId: "ponyo-jyj",
    storageBucket: "ponyo-jyj.appspot.com",
    messagingSenderId: "330406577160",
    appId: "1:330406577160:web:cac335d48ccf070017bdbd",
    measurementId: "G-Q57NCRRPBM"
  };
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;