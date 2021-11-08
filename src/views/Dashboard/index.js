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
        
        
        <div className="dashboard_app">
            <NavBar/>
            <AllPosts searchedItem={searchedItem}/>
        </div>
    </div>
}

export default Dashboard
