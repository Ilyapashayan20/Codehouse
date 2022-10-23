import firebase from 'firebase/compat/app'
import { getFirestore } from  'firebase/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain:  process.env.VUE_APP_AUTH_DOMAIN,
    projectId:  process.env.VUE_APP_PROJECT_ID,
    storageBucket:  process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.VUE_APP_MESSAGIN_SENDER_ID,
    appId:  process.env.VUE_APP_APP_ID,
    measurementId:  process.env.VUE_APP_MEASUREMENT_ID
  };

 const app  = firebase.initializeApp(firebaseConfig)


export  const db = getFirestore()
export const projectFirestore = getFirestore(app)
