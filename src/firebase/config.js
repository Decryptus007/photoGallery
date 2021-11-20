import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDjVGGsAMZ9ifaOjNSl3S85caWhitSw7c",
    authDomain: "dom-firegram.firebaseapp.com",
    databaseURL: "https://dom-firegram.firebaseio.com",
    projectId: "dom-firegram",
    storageBucket: "dom-firegram.appspot.com",
    messagingSenderId: "862364904085",
    appId: "1:862364904085:web:f687efe9aaf6c36b37099c"
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectStorage, projectFirestore, timestamp }