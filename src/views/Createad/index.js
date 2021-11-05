import { useState, useEffect } from 'react'
import { storeData } from '../../config/firebase'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';
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
    <div className="createad_header">
      <Header/>
    </div>
    <NavBar/>
      <div className="createad_view" >
      <div className='createad_card'>

        <p>Product Name</p>
        <input className="createad_input" onChange={e => onChangeValues("title", e)}placeholder="Title" /><br />

        <p>Product Category</p>
        <input className="createad_input" onChange={e => onChangeValues("Category", e)}placeholder="Category" /><br />

        <p>Product Description</p>
        <input className="createad_des" onChange={e => onChangeValues("description", e)} type="string"/><br />

        <p>Images</p>
        <input  onChange={e => onChangeValues("images", e)} type="file" ></input><br />

        <p>Product Price</p>
        <input className="createad_input" onChange={e => onChangeValues("price", e)}placeholder="Enter an amount" type="number"/><br/>

    <button className="createad_btn" onClick={submit}>Submit</button><br/>
    <button className="createad_btn" onClick={back}>Back</button>
    </div>
    </div>
    <Footer/>
  </div>
}

export default CreateAd
