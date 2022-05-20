import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBGzXKtfVd_ii_Ha40pCoKmS2PePaOAMYc',
  authDomain: 'taskit-v1.firebaseapp.com',
  projectId: 'taskit-v1',
  storageBucket: 'taskit-v1.appspot.com',
  messagingSenderId: '220184554283',
  appId: '1:220184554283:web:98361afb70be66a459736e'
}

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig)

// INITIALIZE SERVICES
const taskitFirestore = firebase.firestore()
const taskitAuth = firebase.auth()
const taskitStorage = firebase.storage()

// FIREBASE TIME STAMP
const timestamp = firebase.firestore.Timestamp

export { taskitFirestore, taskitAuth, taskitStorage, timestamp }
