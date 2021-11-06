import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { logout } from "../../config/firebase";
// import "./index.css"

function Header() {
    const [userName, setUserName] = useState()
    const [searchedItem, setSearchedItem] = useState("")
    const [copySearchedItem, setCopySearchedItem] = useState("")
    let displayName
    const auth = getAuth()
    const history = useHistory()

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

    return <div className='header_App'>
        {
            userName && <div className='headder'> 
            
            <img onClick={back} width="50" height= "30"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
            <input className='search' placeholder='Search products by name' />
            <button onClick={search} className='searchButton' >Search</button><br/>
            <div class="dropdown">
                <button class="dropbtn">Welcome {userName} !</button>
                <div class="dropdown-content">
                    <a onClick={editInfo}>Edit Info</a>
                    <a onClick={logout}>My Ads</a>
                    <a className="logout" onClick={logout}>Logout</a>
                </div>
            </div>
            </div>
        }
    </div>
}

export default Header
