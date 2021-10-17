// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa32OfppfiC-IGnl00RnohfpuODe4l-_w",
  authDomain: "first-884a9.firebaseapp.com",
  projectId: "first-884a9",
  storageBucket: "first-884a9.appspot.com",
  messagingSenderId: "534965511773",
  appId: "1:534965511773:web:c2bae5f1592b8ff1ed4fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth()

function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Successfully Registered")
    })
    .catch((e) => {
      alert(e.message)
    })
}

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Successfully Logged In")
    })
    .catch((e) => {
      alert(e.message)
    })
}

export {
  registerUser,
  loginUser
}
