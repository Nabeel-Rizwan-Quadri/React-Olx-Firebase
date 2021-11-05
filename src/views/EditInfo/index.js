import { useState, useEffect } from "react"
import { editInfo, copyDataFirestore  } from "../../config/firebase"
import { useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header";
import NavBar from '../../components/NavBar';
import "./index.css"

function EditInfo () {
    useEffect( async () => {
        // sending request for a cpoy of current user's data from users collection
        // saving said value in user state
        setUserData( await copyDataFirestore(currentuid))
        console.log("copyDataFirestore dashboard", userData)
    }, [])

    const [userData, setUserData] = useState("")
    const {fullName, email, age, uid} = userData
    const [editedData, setEditedData] = useState({})
    
    const history = useHistory()
    const auth = getAuth()

    let currentuid

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentuid = user.uid
        }
      });

    console.log("Edit user data: ", fullName)

    const submit = async () =>{
        await editInfo(currentuid, editedData)
        history.push("/")
    }

    const onChangeValues = (key, e) =>{
        const value = e.target.value
        setEditedData({ ...editedData, [key]: value})
    }

    console.log("before edit data: ", editedData)
    return <div className="editinfo_app">
        <div className="editinfo_header">
        <Header/>
        </div>
        <NavBar/>
        <div className="editinfo_body" >
            <h1>Edit your information here </h1>

            <h2>Change Full Name</h2>
            <input placeholder={fullName} onChange={e => onChangeValues("editedFullName", e)}></input><br/>
            <h2>Change Phone Number</h2>
            <input placeholder="Enter phone no" onChange={e => onChangeValues("editedPhoneNumber", e)}></input><br/>
            <h2>Change age</h2>
            <input placeholder={age} onChange={e => onChangeValues("editedAge", e)}></input><br/>

            <button onClick={submit}>Edit</button><br/>
        </div>
        
        <Footer/>
    </div>
}

export default EditInfo
