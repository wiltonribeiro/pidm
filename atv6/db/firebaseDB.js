import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCVM968T6DuNgiFietUzj9_ZndtdsK1iI",
    authDomain: "atv6-pidm.firebaseapp.com",
    projectId: "atv6-pidm",
    storageBucket: "atv6-pidm.appspot.com",
    messagingSenderId: "852611066021",
    appId: "1:852611066021:web:ec189089db0fa14e5a054c",
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;