import { useState } from 'react'
import { storeData } from '../../../config/firebase'

function CreateAd() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState('')
  const [price, setPrice] = useState('')

  

  const uploadImages = () =>{
      alert("Images Uploaded")
  }

  return <div>

        <p>TITLE</p>
        <input
        onChange={e => setTitle(e.target.value)}
        placeholder="Title" />
        <br />

        <p>Description</p>
        <input
        onChange={e => setDescription(e.target.value)}
        placeholder="Describe the product" />
        <br />

        <p>Images</p>
        <button
        onClick={uploadImages}>Upload Images</button>
        <br />

        <p>Price</p>
        <input
        onChange={e => setPrice(e.target.value)}
        placeholder="Enter an amount" />
        <br/>

    <button onClick={() => storeData({title, description, images, price})}>Submit</button>
  </div>
}

export default CreateAd