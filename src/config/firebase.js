// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"
import { addDoc, collection, getFirestore, setDoc, doc, getDoc, getDocs, query, orderBy } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCABm4So3ommIUzXhKhKCe8oErz87GRFA4",
  authDomain: "auth-b432f.firebaseapp.com",
  projectId: "auth-b432f",
  storageBucket: "auth-b432f.appspot.com",
  messagingSenderId: "431034569828",
  appId: "1:431034569828:web:a12d94b9a7866e5cc33b71"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore();
const storage = getStorage()

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

async function storeData(data) {
  //Upload files to storage
  let { images } = data
  let imagesUrl = []

  for(let i = 0; i < images.length; i++) {
    const storageRef = ref(storage, 'ads/' + images[i].name)
    await uploadBytes(storageRef, images[i])
    const url = await getDownloadURL(storageRef)
    imagesUrl.push(url)
  }
  data.images = imagesUrl
  //Add data to database
  await addDoc(collection(db, 'ads'), data)
  alert('Data added successfully!')
}

async function callData(){

  const q = query(collection(db, "ads"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  let dataCopyArray = []
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());

  //array for copying data of firestore
  let dataCopy = doc.data()
  console.log("copy data firebase ===> ", dataCopy)
  dataCopyArray.push(dataCopy)
  // data.append(dataCopy)
  });
  return  dataCopyArray
}

function logout(){
  alert("Successfully logged out")
  window.location.reload() 
}

export {
  registerUser,
  loginUser,
  storeData,
  logout,
  callData
}
