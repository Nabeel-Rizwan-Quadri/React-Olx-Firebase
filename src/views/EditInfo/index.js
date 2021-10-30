import { useState, useEffect } from "react"
import { editInfo, copyDataFirestore  } from "../../config/firebase"
import { useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
        history.push("/dashboard")
    }

    const onChangeValues = (key, e) =>{
        const value = e.target.value
        setEditedData({ ...editedData, [key]: value})
    }

    const back = () =>{
        history.push("/dashboard")
    }

    console.log("before edit data: ", editedData)
    return <div>
        <h1>Edit your information here </h1>

        <h2>Change Full Name</h2>
        <input placeholder={fullName} onChange={e => onChangeValues("editedFullName", e)}></input><br/>
        <h2>Change Phone Number</h2>
        <input placeholder="Enter phone no" onChange={e => onChangeValues("editedPhoneNumber", e)}></input><br/>
        <h2>Change age</h2>
        <input placeholder={age} onChange={e => onChangeValues("editedAge", e)}></input><br/>

        <button onClick={submit}>Edit</button><br/>
        <button onClick={back}>back</button>
    </div>
}

export default EditInfo
