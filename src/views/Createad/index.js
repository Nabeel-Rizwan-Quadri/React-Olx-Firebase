import { useState } from 'react'
import { storeData } from '../../config/firebase'
import { useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./index.css"

function CreateAd()  {

  let createdAt = Date(Date.now()).slice(0, 25)
  const history = useHistory()

  const [user, setUser] = useState("")
  
  const auth = getAuth();
  console.log("app ", user)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      console.log("if ", user.uid)
      // ...
    } else {
    }
  });

  const [post, setPost] = useState({
    uid: user.uid,
    userName: user.fullName,
    title: "",
    description: "",
    price: "",
    images: [],
    createdAt: createdAt
  })

  const submit = async () =>{
    await storeData(post)
    history.push("/allposts")
  }

  const onChangeValues = (key, e) =>{
      const value = key  === "images" ? e.target.files : e.target.value
      setPost({ ...post, [key]: value})
  }
  
  //back to dashboard
  const back = () =>{
    history.push("/dashboard")
  } 

  console.log("data from createpost", post.images.length)

  return <div className='body'>
      <div className='card'>

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
  </div>
}

export default CreateAd
