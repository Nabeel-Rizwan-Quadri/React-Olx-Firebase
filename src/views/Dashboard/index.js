import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { updateTheme } from '../../store/actions/themeActions';
import { useDispatch } from 'react-redux';
import { logout, copyDataFirestore } from '../../config/firebase';
import { useHistory } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

import './index.css';

function Dashboard() {
    const history = useHistory()
    const auth = getAuth();
    let displayName
    const [userName, setUserName] = useState()
    const [searchedItem, setSearchedItem] = useState("")
    const [copySearchedItem, setCopySearchedItem] = useState("")
    const [userData, setUserData] = useState("")
    const themeColor = useSelector(state => state.theme)
    const dispatch = useDispatch()
    console.log(themeColor)
    
    let uid = ""

    onAuthStateChanged(auth, (user) => {
        if (user) {
            displayName = user.displayName
            setUserName(displayName)
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

    const colorSelect = (color) => {
        dispatch(updateTheme(color))
        alert("theme changed to", color)
    }

    return <div className='App'>
        {
            userName ? <div style={{ background: themeColor }} className='headder'>
            
            <img onClick={refresh} width="50" height= "30"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
            <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>
            <button onClick={search} className='searchButton' >Search</button><br/>
            <div class="dropdown">
                <button class="dropbtn">{userName}</button>
                <div class="dropdown-content">
                    <a onClick={editInfo}>Edit Info</a>
                    <a onClick={() => history.push("/currentuserads")}>My Ads</a>
                    <a className="logout" onClick={logout}>Logout</a>
                </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">Select Theme</button>
                <div class="dropdown-content">
                    <a onClick={() => colorSelect("white")}>Light Theme</a>
                    <a onClick={() => colorSelect("grey")}>Dark Theme</a>
                </div>
            </div>
            </div>

            :<div className='headder'> 
            <img width="100" height= "50"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png "></img>
            <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>
            <button className='searchButton' onClick={search}>Search</button><br/>
            <button onClick={login} className='login'>Login</button>
            <div class="dropdown">
            <button class="dropbtn">Select Theme</button>
                <div class="dropdown-content">
                    <a onClick={() => colorSelect("white")}>Light Theme</a>
                    <a onClick={() => colorSelect("grey")}>Dark Theme</a>
                </div>
            </div>
            </div>
        }
        
        <div className="dashboard_app">
            <NavBar/>
            <AllPosts searchedItem={searchedItem}/>
        </div>

        <Footer/>
    </div>
}

export default Dashboard
