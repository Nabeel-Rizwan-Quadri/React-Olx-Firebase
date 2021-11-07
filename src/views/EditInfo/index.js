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
    console.log("userdata ", userData)
    
    const history = useHistory()
    const auth = getAuth()

    let currentuid

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentuid = user.uid
        }
      });

    const submit = async () =>{
        console.log("submit",userData)
        console.log("submit",currentuid)
        await editInfo(currentuid, userData)
        history.push("/")
    }

    const onChangeValues = (key, e) =>{
        const value = e.target.value
        setUserData({ ...userData, [key]: value})
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

            <input  value={fullName} className="editinfo_input" type="string" onChange={e => onChangeValues("fullName", e)}></input><br/>
            <input value={email} className="editinfo_input" type="email" onChange={e => onChangeValues("email", e)}></input><br/>
            <input value={age} className="editinfo_input" type="number" onChange={e => onChangeValues("age", e)}></input><br/>
            <input type="file" onChange={e => onChangeValues("imageURL", e)}></input><br/>

            <button className="editinfo_btn" onClick={submit}>Edit</button><br/>
            <button className="editinfo_btn" onClick={back}>Back</button><br/>
            </div>
        </div>
        
        <Footer/>
    </div>
}

export default EditInfo
