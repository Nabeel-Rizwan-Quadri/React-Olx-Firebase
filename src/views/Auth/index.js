import { useState } from 'react'
import { registerUser, loginUser } from '../../config/firebase'
import './index.css'

function Auth() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setName] = useState('')
  const [age, setAge] = useState()
  const [phoneNumber, setPhoneNo] = useState()
  const [photoURL, setPhotoURL] = useState('')
  const [screen, setScreen] = useState("login")

  const login = () =>{
    setScreen("login")
  }
  
  const signup = () =>{
    setScreen("signup")
  }

  const regUser = async () =>{
    try{
      await registerUser({email, password, fullName, age, phoneNumber, photoURL})
      alert("Account successfully created")
    }
    catch(e){
      alert(e.message)
    }
  }

  const LoginUser = async() =>{
    try{
    await loginUser(email, password)
    alert("Successfully Logged In")
    }
    catch(e){
      alert(e.message)
    }
  }
 
  return <div className='auth_body'>
    <div className="auth_view" >
      <h1>OLX APP</h1>
    <div className='auth_card'>
    <>{
            screen === "login" && 
            <>
            <h1 style={{color: "wheat" , padding:15}} >Login</h1><br/>

            <input className="auth_input"
            onChange={e => setEmail(e.target.value)}
            type="email" placeholder="Enter your email" /><br />

            <input className="auth_input"
            onChange={e => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" /><br />

            <button className="auth_btn" onClick={LoginUser}>Login</button><br/>
            <button className='auth_btn' onClick={signup}>Dont Have an Account Register!</button>
            </>
          }
          {
            screen === "signup" && <>
            <h1 style={{color: "wheat" , padding:15}}>Sign up</h1><br/>

            <input className="auth_input"
            onChange={e => setName(e.target.value)}
            type="name" placeholder="Enter your name" /><br/>

            <input className="auth_input"
            onChange={e => setAge(e.target.value)}
            type="number" placeholder="Enter your age" /><br/>

            <input className="auth_input"
            onChange={e => setPhoneNo(e.target.value)}
            type="number" placeholder="Enter your phone no" /><br/>
            
            <input 
            onChange={e => setPhotoURL(e.target.value)}
            type="file"/><br/>
            

            <input className="auth_input"
            onChange={e => setEmail(e.target.value)}
            type="email" placeholder="Enter your email" /><br/>

            <input className="auth_input"
            onChange={e => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" /><br/>

            <button className='auth_btn' onClick={regUser}>Sign up</button><br/>
            <button className='auth_btn' onClick={login}>click here for login</button>
            </>
          }</>
    </div>
    </div>
  </div>
}

export default Auth
