import { useState } from 'react'
import { storeData } from '../../config/firebase'
import "./index.css"

function CreateAd( {setAllPost, uid} )  {
  console.log(uid)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState('')
  const [price, setPrice] = useState('')

  const uploadImages = () =>{
      alert("Images Uploaded")
  }

  const submit = () =>{
    storeData({title, description, images, price, uid})
    setAllPost()
  }

  //back to dashboard
  const back = () =>{
    setAllPost()
  } 

  return <div className='body'>
      <div className='card'>

        <p>TITLE</p>
        <input
        onChange={e => setTitle(e.target.value)}
        placeholder="Title" />
        <br />

        <p>Description</p>
        <input
        onChange={e => setDescription(e.target.value)}
        placeholder="Describe the product" type="string"/>
        <br />

        <p>Images</p>
        <button
        onClick={uploadImages} type="file">Upload Images</button>
        <br />

        <p>Price</p>
        <input
        onChange={e => setPrice(e.target.value)}
        placeholder="Enter an amount" type="number"/>
        <br/>

    <button onClick={submit}>Submit</button><br/>
    <button onClick={back}>Back</button>
    </div>
  </div>
}

export default CreateAd