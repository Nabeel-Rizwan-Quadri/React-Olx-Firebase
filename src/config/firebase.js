// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut  } from "firebase/auth"
import { addDoc, collection, getFirestore, setDoc, doc, getDoc, getDocs, query, orderBy, where } from "firebase/firestore"
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

      await updateProfile(auth.currentUser, {
        displayName: fullName, 
        age: age,
      })

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
    // console.log("Document data:", docSnap.data());
    console.log("Loggedin");
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
    return {uid, ...docSnap.data() }
}

async function storeData(data) {
  //Upload files to storage
  console.log("Firebase Before: ", data)
  let { images } = data
  let imagesUrl = []

  for(let i = 0; i < images.length; i++) {
    const storageRef = ref(storage, 'ads/' + images[i].name)
    await uploadBytes(storageRef, images[i])
    const url = await getDownloadURL(storageRef)
    imagesUrl.push(url)
  }
  data.images = imagesUrl
  await addDoc(collection(db, 'ads'), data)
  alert('Data added successfully!')
}

async function callData(searchedItem){
  // console.log("firebase searched data: ", searchedItem)
  let dataCopyArray = []

  if(searchedItem){
    const q = query(collection(db, "ads"), where("title", "==", searchedItem))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push({...dataCopy, id: doc.id})
  });
  }
  else{
    const q = query(collection(db, "ads"), orderBy("createdAt", "asc"))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push({...dataCopy, id: doc.id})
  });
  }
  return  dataCopyArray
}

async function editInfo (uid, edit){
  console.log("firebase edit: ",edit)
  let dataCopyArray = []
  let newData = {}

  await alert(uid)

  const q = query(collection(db, "users"))
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });

  for(let i=1; i < dataCopyArray.length; i++){
    if(dataCopyArray[i].uid === uid){
      newData = dataCopyArray[i]
      // console.log(newData)
    }
  }
  await updateProfile(auth.currentUser, {
    displayName: edit.editedFullName, 
    phoneNumber: edit.editedPhoneNumber 
  })
  console.log("Auth profile", auth.currentUser)
  alert("Auth profile updated")
  

  edit.editedFullName && (newData.fullName = edit.editedFullName)
  edit.editedAge && (newData.age = edit.editedAge)

 
  // await deleteDoc(doc(db, "users", user.uid));
  await setDoc(doc(db, "users", uid), newData)
  alert('Data edited successfully!')
}


async function copyDataFirestore(uid){
  let dataCopyArray = []
  let currentUserInfo = {}

  const q = query(collection(db, "users"))
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });

  for(let i=1; i < dataCopyArray.length; i++){
    if(dataCopyArray[i].uid === uid){
      currentUserInfo = dataCopyArray[i]
      // console.log("copyDataFirestore firebase", currentUserInfo)
    }
  }
  return currentUserInfo
}

async function deleteData(user){
  alert("Firebase data deleted")
  await alert(user.uid)
}

async function updateData(user){
  alert("Firebase data updated")
  await alert(user.uid)
  // await deleteDoc(doc(db, "users", user.uid));
}

async function logout(){
  try{
    await signOut(auth)
    alert("successfully logged out")
    window.location.reload()
  }
  catch(e){
    alert(e.message)
  }
}

async function updateUserProfile (){
  await updateProfile(auth.currentUser, {
    displayName: "Jane Q. User", 
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  })
}

async function getCurrentAd (adId){

  const docRef = doc(db, "users", adId);
  const docSnap = await getDoc(docRef);

  return docSnap.data()
}

export {
  registerUser,
  loginUser,
  storeData,
  logout,
  callData,
  deleteData,
  updateData,
  editInfo,
  copyDataFirestore,
  updateUserProfile,
  getCurrentAd
}
