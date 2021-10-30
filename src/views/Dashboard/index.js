import { useState, useEffect } from 'react'
import { logout, copyDataFirestore } from '../../config/firebase';
import { useHistory } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AllPosts from '../AllPosts';
import './index.css';

function Dashboard() {
    const history = useHistory()
    const auth = getAuth();
    
    const [searchedItem, setSearchedItem] = useState("")
    const [copySearchedItem, setCopySearchedItem] = useState("")
    const [userData, setUserData] = useState("")
    
    let uid = ""

    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid
        }
        else{
            console.log("Dashboard no user")
        }
      });

    useEffect( async() => {
        setUserData( await copyDataFirestore(uid) )
        // sending request for a cpoy of current user's data from users collection
        // saving said value in user state
        // console.log("copyDataFirestore dashboard", userData)
    }, [])

    const search = async () => {
        // console.log(user)
        await setSearchedItem(copySearchedItem)
        alert("searching: " + copySearchedItem)
    }

    const SetCreateAd = () =>{
        history.push("/createad")
    } 

    const refresh = () =>{
        setCopySearchedItem("")
        setSearchedItem("")
    }

    const editInfo = () =>{
        history.push("/editinfo")
    }

    const login = () =>{
        history.push("/auth")
      }

    return <div className='App'>
        {
            userData.fullName ? <div className='headder'> 
            <button onClick={editInfo} className='user'>Username: {userData.fullName}</button>
            <button onClick={logout} className='logout'>Logout</button><br/>
            </div>

            :<div className='headder'> 
            <button onClick={login} className='logout'>Login</button>
            </div>
        }
        

        <h1>Welcome to the home page</h1>

        <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>

        <button className='searchButton' onClick={search}>Search</button><br/>
        <button onClick={(SetCreateAd)}>Create an AD</button>
        <button onClick={refresh}>Refresh Data</button>
        <AllPosts searchedItem={searchedItem}/>
        

        {/* {screen === "createad" ? <CreateAd setAllPost={setAllPost}  user={user}/> : <button onClick={(SetCreateAd)}>Create an AD</button>}
        <button onClick={refresh}>Refresh Data</button>
        {screen === "allposts" && <AllPosts searchedItem={searchedItem}/>}
        {screen === "editInfo" && <EditInfo user={user} setAllPost={setAllPost}/>} */}

        <div className='footer'>COPYRIGHT 2021 ALL RIGHTS RESERVED</div>
        
    </div>
}

export default Dashboard
