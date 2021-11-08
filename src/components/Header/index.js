import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { logout } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";

import { updateTheme } from "../../store/actions/themeActions";
import { pushSearch } from "../../store/actions/searchActions";
import { removeSearch } from "../../store/actions/searchActions";

import "./index.css"

function Header() {
    const auth = getAuth()
    const history = useHistory()
    const dispatch = useDispatch()

    let displayName

    const [userName, setUserName] = useState()
    const [copySearchedItem, setCopySearchedItem] = useState("")
    
    const themeColor = useSelector(state => state.themeReducer.theme)

    const searchedItem = useSelector(state => state.searchReducer.searchedItem)
    console.log("header searcheditem: ", searchedItem)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            displayName = user.displayName
            setUserName(displayName)
        }
        else{
            console.log("Header no user")
        }
      });   
      
    const search = () => {
        console.log(copySearchedItem)
        dispatch(pushSearch(copySearchedItem))
        history.push("/")
    }

    const login = () =>{
        history.push("/auth")
      }

    const editInfo = () =>{
        history.push("/editinfo")
    }

    const toCurrentUserAds = () =>{
        history.push("/currentuserads")
    }

    const refresh = () =>{
        dispatch(removeSearch())
        setCopySearchedItem("")
        history.push("/")
    }

    const colorSelect = (theme) => {
        dispatch(updateTheme(theme))  
        console.log("theme color",themeColor)
        console.log("on click color",theme)
    }

    return <div className='header_App'>
        {
            userName ? <div style={{ background: themeColor }} className='headder'>
            
            <img onClick={refresh} width="50" height= "30"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
            <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>
            <button onClick={search} className='searchButton' >Search</button><br/>
            <div class="dropdown">
                <button class="dropbtn">{userName}</button>
                <div class="dropdown-content">
                    <a onClick={editInfo}>Edit Info</a>
                    <a onClick={toCurrentUserAds}>My Ads</a>
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
            <img onClick={refresh} width="100" height= "50"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png "></img>
            <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>
            <button className='searchButton' onClick={search}>Search</button><br/>
            <button onClick={login} className='searchButton'>Login</button>
            <div class="dropdown">
            <button class="dropbtn">Select Theme</button>
                <div class="dropdown-content">
                    <a onClick={() => colorSelect("white")}>Light Theme</a>
                    <a onClick={() => colorSelect("grey")}>Dark Theme</a>
                </div>
            </div>
            </div>
        }
    </div>
}

export default Header
