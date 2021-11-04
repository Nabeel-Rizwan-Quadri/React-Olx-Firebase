import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { logout } from "../../config/firebase";
import Dashboard from "../../views/Dashboard";


function Header() {
    const [userName, setUserName] = useState()
    let displayName
    const auth = getAuth()
    const history = useHistory()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            displayName = user.displayName
            setUserName(displayName)
            console.log(displayName)
        }
        else{
            console.log("Header no user")
        }
      });   

    const home = () =>{
        history.push("/")
    }

    return <div className='header_App'>
        {
            userName ? <div className='headder'> 
            
            <img onClick={home} width="100" height= "50"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
            <button className='user'>Welcome {userName}!</button>
            <input className='search' placeholder='Search products by name' />
            <button className='searchButton'>Search</button><br/>
            <button className='logout'>Logout</button><br/>
            </div>

            :<div className='headder'> 
            <img width="100" height= "50"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png "></img>
            <input className='search' placeholder='Search products by name'/>
            <button className='searchButton' >Search</button><br/>
            <button onClick={logout} className='login'>Login</button>
            </div>
        }
    </div>
}

export default Header
