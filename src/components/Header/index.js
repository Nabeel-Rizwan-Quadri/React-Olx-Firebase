import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { logout } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { updateTheme } from "../../store/actions/themeActions";
// import "./index.css"

function Header() {
    const [userName, setUserName] = useState()
    const [searchedItem, setSearchedItem] = useState("")
    const [copySearchedItem, setCopySearchedItem] = useState("")
    let displayName
    const auth = getAuth()
    const history = useHistory()
    const dispatch = useDispatch()
    const themeColor = useSelector(state => state.theme)
    console.log("theme color",themeColor)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            displayName = user.displayName
            setUserName(displayName)
        }
        else{
            console.log("Header no user")
        }
      });   

    const editInfo = () =>{
        history.push("/editinfo")
    }

    const back =()=>{
        history.push("/")
    }

    const search = async () => {
        // console.log(user)
        await setSearchedItem(copySearchedItem)
    }

    const colorSelect = (theme) => {
        dispatch(updateTheme(theme))
        alert(theme, "theme")
        console.log("theme color",themeColor)
        console.log("on click color",theme)
    }

    return <div className='header_App'>
        {
            userName && <div className='header_headder'> 
            
            <img onClick={back} width="50" height= "30"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
            <input className='header_search' placeholder='Search products by name' />
            <button onClick={search} className='searchButton' >Search</button><br/>
            <div class="header_dropdown">
                <button class="header_dropbtn">{userName}</button>
                <div class="header_dropdown-content">
                    <a onClick={editInfo}>Edit Info</a>
                    <a onClick={() => history.push("/currentuserads")}>My Ads</a>
                    <a onClick={logout}>Logout</a>
                </div>
            </div>
            <div class="header_dropdown">
            <button class="header_dropbtn">Select Theme</button>
                <div class="header_dropdown-content">
                    <a onClick={() => colorSelect("white")}>Light Theme</a>
                    <a onClick={() => colorSelect("grey")}>Dark Theme</a>
                </div>
            </div>
            </div>
        }
    </div>
}

export default Header
