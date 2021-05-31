import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBIPmMxc4lLiAnFpXPQjFiPedRORCu1mtg",
  authDomain: "qwitter-9729b.firebaseapp.com",
  projectId: "qwitter-9729b",
  storageBucket: "qwitter-9729b.appspot.com",
  messagingSenderId: "558077512959",
  appId: "1:558077512959:web:7dfb61cebee116981410ca"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
