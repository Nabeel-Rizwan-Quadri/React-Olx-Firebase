// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCABm4So3ommIUzXhKhKCe8oErz87GRFA4",
  authDomain: "auth-b432f.firebaseapp.com",
  projectId: "auth-b432f",
  storageBucket: "auth-b432f.appspot.com",
  messagingSenderId: "431034569828",
  appId: "1:431034569828:web:a12d94b9a7866e5cc33b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore();

const auth = getAuth()

let Uid

function registerUser({email, password, fullName, age}) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Successfully Registered")

      addDoc(collection(db, "users"), {
        fullName, email, age
      })
      .then(() => {
        
        alert("Successfully added data in db")
      })
      .catch((e) => {
        alert(e.message)
      })
      
    })
    .catch((e) => {
      alert(e.message)
    })
}

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user)
      Uid = userCredential.user.uid
      alert("Successfully Logged In")
    })
    .catch((e) => {
      alert(e.message)
    })
}

function storeData({title, description, images, price}){
  addDoc(collection(db, "ads"), {
    Uid, title, description, images, price
  })
  .then(() => {
    
    alert("Successfully added data in db")
  })
  .catch((e) => {
    alert(e.message)
  })
}

export {
  registerUser,
  loginUser,
  storeData
}
