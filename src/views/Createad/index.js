import { useState, useEffect } from 'react'
import { storeData } from '../../config/firebase'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import "./index.css"

function CreateAd({user})  {

  const history = useHistory()
  
  console.log(user.displayName)
  console.log(user.uid)

  let createdAt = Date(Date.now()).slice(0, 25)
  
  const [userData, setUserData] = useState({
    uid: user.uid,
    userName: user.displayName,
    createdAt: createdAt,
    price: 0,
    description: "",
    title: "",
    images: []    
  })
  
  const submit = async () =>{
    try{

      setUserData({...userData, fullName: user.displayName})

      console.log("before sending: ", userData)

      await storeData(userData)

      history.push("/")
    }
    catch(e){
      alert(e.message)
    }
  }

  const onChangeValues = (key, e) =>{
      const value = key  === "images" ? e.target.files : e.target.value
      setUserData({ ...userData, [key]: value})
      console.log("On Change: ", userData)
  }
  
  //back to dashboard
  const back = () =>{
    history.push("/")
  } 

  return <div className='createad_body'>
    <Header/>
      <div className='createad_card'>

        <p>TITLE</p>
        <input onChange={e => onChangeValues("title", e)}placeholder="Title" /><br />

        <p>Description</p>
        <input onChange={e => onChangeValues("description", e)}placeholder="Describe the product" type="string"/><br />

        <p>Images</p>
        <input onChange={e => onChangeValues("images", e)} type="file" ></input><br />

        <p>Price</p>
        <input onChange={e => onChangeValues("price", e)}placeholder="Enter an amount" type="number"/><br/>

    <button onClick={submit}>Submit</button><br/>
    <button onClick={back}>Back</button>
    </div>
    <Footer/>
  </div>
}

export default CreateAd
