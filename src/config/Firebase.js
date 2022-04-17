import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const config = {

        apiKey: process.env.REACT_APP_APIKEY,
        authDomain:process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
        appId: process.env.REACT_APP_APPID
}
  
const fire = firebase.initializeApp(config)
const storage = firebase.storage()
const auth = firebase.auth()
export{
    fire,
    storage,
    firebase,
    auth
}
