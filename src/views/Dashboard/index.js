import { useState, useEffect } from 'react'
import { logout, copyDataFirestore } from '../../config/firebase';
import { useHistory } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AllPosts from '../AllPosts';
import './index.css';
import Footer from '../../components/Footer/Footer';

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
            
            <img width="100" height= "50"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
            <button onClick={editInfo} className='user'>Welcome {userData.fullName}!</button>
            <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>
            <button className='searchButton' onClick={search}>Search</button><br/>
            <button onClick={logout} className='logout'>Logout</button><br/>
            </div>

            :<div className='headder'> 
            <img width="100" height= "50"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png "></img>
            <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>
            <button className='searchButton' onClick={search}>Search</button><br/>
            <button onClick={login} className='login'>Login</button>
            </div>
        }
        
        <div className="bodys">
            <nav>
            <button onClick={(SetCreateAd)}>Create an AD</button>
            <button onClick={refresh}>Refresh Data</button>
            </nav>
            
            <AllPosts searchedItem={searchedItem}/>
        </div>

        {/* {screen === "createad" ? <CreateAd setAllPost={setAllPost}  user={user}/> : <button onClick={(SetCreateAd)}>Create an AD</button>}
        <button onClick={refresh}>Refresh Data</button>
        {screen === "allposts" && <AllPosts searchedItem={searchedItem}/>}
        {screen === "editInfo" && <EditInfo user={user} setAllPost={setAllPost}/>} */}

        <Footer/>
    </div>
}

export default Dashboard
