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

    const back = () =>{
        history.push("/")
    }

    // console.log("before edit data: ", editedData)
    return <div className="editinfo_body">
        <div className="editinfo_header">
        <Header/>
        </div>
        <NavBar/>
      <div className="editinfo_view" >
        <div className="editinfo_card" >
            <h1 style={{color: "wheat" , padding:15}}>Edit info</h1>

            <input className="editinfo_input" type="string" placeholder={fullName} onChange={e => onChangeValues("editedFullName", e)}></input><br/>

            <input className="editinfo_input" type="email" placeholder={email} onChange={e => onChangeValues("editedEmail", e)}></input><br/>

            <input className="editinfo_input" type="number" placeholder={age} onChange={e => onChangeValues("editedAge", e)}></input><br/>

            <input type="file" onChange={e => onChangeValues("editedImageURL", e)}></input><br/>

            <button className="editinfo_btn" onClick={submit}>Edit</button><br/>

            <button className="editinfo_btn" onClick={back}>Back</button><br/>
        </div>
        </div>
        
        <Footer/>
    </div>
}

export default EditInfo
