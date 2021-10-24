import React, { useState, useEffect } from 'react'
import Post from '../../components/Post'
import { callData } from '../../config/firebase';
import './index.css';


function AllPosts() {

  // Api: Application Programable Interface
  // backend server -> API -> Front End

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPost(res))
  }, [])

  // import { collection, query, where, getDocs } from "firebase/firestore";

  // const q = query(collection(db, "cities"), where("capital", "==", true));

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  const [data, setData] = useState([])
  
  const [post, setPost] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [editIndex, setIndex] = useState()

 
  // console.log("this is All posts ", data)
  const CallData = async() =>{
    const data = await callData()
    console.log("Copy data Allpost ===>", data)
    setData(data)
  }

  const del = (index) =>{
    //to delete the post
    console.log("Index", index)

    //code to delete
    const tempPost = [...post]
    tempPost.splice(index, 1)
    setPost(tempPost)
  }

  const edit = (index) =>{
    //to edit the post
    console.log(index)

    setIsEdit(true)
    setIndex(index)
  }

  const update = () =>{
    const tempPost = [...post]
    console.log(tempPost[editIndex].title)
    tempPost[editIndex].title = title    
    tempPost[editIndex].body = body
    setPost(tempPost)
    setIsEdit(false)
  }

  return (
  <div className='grid-container'>
    <button onClick={CallData()}>Refreash data</button>
    {data.map((item,index) => {
          return  <div className='item'>
            
            <Post id={item.uid} description={item.description} title={item.title} price={item.price} del={()=>del(index)} edit={()=>edit(index)}/>
            {
              isEdit && editIndex === index &&
              <div>
                <p>Edit Title</p>
                <input onChange = {(e) => setTitle(e.target.value)}  placeholder={item.title} ></input><br/>
                <p>Edit Body</p>
                <input onChange = {(e) => setBody(e.target.value)} placeholder={item.body}></input><br/>
                <button onClick={update}>update</button>
              </div>
            }
            </div>
        })}
  </div>
  )
}

export default AllPosts
