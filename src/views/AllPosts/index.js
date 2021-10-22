import React, { useState, useEffect } from 'react'
import Post from '../../components/Post'
import './index.css';


function AllPosts() {

  // Api: Application Programable Interface
  // backend server -> API -> Front End

  const [post, setPost] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [editIndex, setIndex] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPost(res))
  }, [])

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
    {post.map((item,index) => {
          return  <div className='item'>
            
            <Post id={item.id} userId={item.userId} title={item.title} body= {item.body} del={()=>del(index)} edit={()=>edit(index)}/>
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
