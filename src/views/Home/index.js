import { useState } from 'react'
import CreateAd from '../Ad'
import AllPosts from '../AllPosts'
import './index.css';

function Home() {
    const [item, setItem] = useState("")
    const logout = () => {
        // console.log(user)
        alert("logedout")
    }
    const search = () => {
        // console.log(user)
        alert("searching")
    }

    let createad = false
    // const [screen, setScreen] = useState("")


    const setAdScreen = () =>{
        createad = true
    }

    // const [screen, setScreen] = useState("")

    return <div className='App'>
        <h1>This is home page</h1>
        <button onClick={logout} >Logout</button><br/>
        <input placeholder='search an item'/><button onClick={search}>Search</button><br/>
        {
            // screen == "createAd" && <CreateAd/>
            createad ? <CreateAd/> : <button onClick={() => setAdScreen}>Create an AD</button>
        }
        {/* <button onClick={() => setScreen("createAd")}>Create an AD</button> */}
        <AllPosts/>
    </div>
}

export default Home
