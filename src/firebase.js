import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBVtkGhqEVV_FSj3gsYTE_0D8QWrBbNNNI",
  authDomain: "auth-development-83c43.firebaseapp.com",
  databaseURL: "https://auth-development-83c43-default-rtdb.firebaseio.com",
  projectId: "auth-development-83c43",
  storageBucket: "auth-development-83c43.appspot.com",
  messagingSenderId: "877896503484",
  appId: "1:877896503484:web:ae0a0c5d6d8257e04440b9"
})

export const auth = app.auth()
export default app
