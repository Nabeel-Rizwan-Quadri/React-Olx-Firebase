// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"
import { addDoc, collection, getFirestore, setDoc, doc, getDoc } from "firebase/firestore"

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

async function registerUser({email, password, fullName, age}) {
  const {user: {uid}} = await createUserWithEmailAndPassword(auth, email, password)
    
      await setDoc(doc(db, "users", uid), {
        fullName, email, age, uid
      })
    return uid
}

async function loginUser(email, password) {
  const {user: {uid}} = await signInWithEmailAndPassword(auth, email, password)

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
    return {uid, ...docSnap.data() }
}

function storeData({title, description, images, price}){
  addDoc(collection(db, "ads"), {
    title, description, images, price
  })
  .then(() => {
    
    alert("Successfully added data in db")
  })
  .catch((e) => {
    alert(e.message)
  })
}

function logout(){
  alert("This is logout from firebase")
}

export {
  registerUser,
  loginUser,
  storeData,
  logout
}
