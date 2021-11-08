import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { getCurrentUserAds } from '../../config/firebase';

import './index.css';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function CurrentUserAds() {
  const auth = getAuth()
  const [currentUid, setCurrentUid] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
        let currentUid = user.uid
        setCurrentUid(currentUid)
    }
    else{
        console.log("Header no user")
    }
  });  

  useEffect(async() => {
    const data = await getCurrentUserAds(currentUid)
    setData(data)
  }, [currentUid])

  const [data, setData] = useState([])
  // const [post, setPost] = useState([])

  const history = useHistory()

    const goToDetails = (adId) => {
        history.push(`/details/${adId}`)
    }

    
  return (
    <div className="currentUserAds_body">
      <div className='currrentUserAds_headder'>
      <div className='app_headder'><Header/></div>

      </div>
      <NavBar/>

      <h1 >My Ads</h1>

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
