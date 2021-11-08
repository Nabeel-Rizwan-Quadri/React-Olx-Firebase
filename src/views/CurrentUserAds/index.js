import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { callData } from '../../config/firebase';
import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function CurrentUserAds({searchedItem}) {
  // console.log("Allposts search: ", searchedItem)

  useEffect(async() => {
    const data = await callData(searchedItem)
    setData(data)
  }, [searchedItem])

  const [data, setData] = useState([])
  // const [post, setPost] = useState([])

  const history = useHistory()

    const goToDetails = (adId) => {
        history.push(`/details/${adId}`)
    }

    
  return (
    <div className="currentUserAds_body">
      <div className='currrentUserAds_headder'>
      <Header/>
      </div>
      <NavBar/>
      {
        searchedItem ? 
      <h1 >Search results for "{searchedItem}"</h1>
      : 
      <h1 >My Ads</h1>
      }
  <div className='grid-container'>
    {data.map((item,index) => {
          return <div onClick={() => goToDetails(item.id)}>
          
          <img height="300" width="400px" alt="ad image" src={item.images[0] ? item.images[0] : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"} ></img>
          
          <div className="product__cardbody" >
              <br/><h3 >Product Name: {item.title}</h3><br />
              <h3 >Price: {item.price}/-</h3   ><br/>
          </div>

        </div>
        })}
  </div>
  <Footer/>
  </div>
  )
}

export default CurrentUserAds
