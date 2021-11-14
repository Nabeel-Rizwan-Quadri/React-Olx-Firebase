import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getAllAds } from '../../config/firebase';
import { updateAds } from '../../store/actions/adsActions';
import './index.css';

function AllPosts({searchedItem}) {
  // console.log("Allposts search: ", searchedItem)
  const dispatch = useDispatch()
  const ads = useSelector(state => state.adsReducer.ads)
  console.log("ads ",ads)

  useEffect(async() => {
    const data = await getAllAds(searchedItem)
    setData(data)
    dispatch(updateAds())
  }, [searchedItem])

  const [data, setData] = useState([])
  // const [post, setPost] = useState([])

  const history = useHistory()

    const goToDetails = (adId) => {
        history.push(`/details/${adId}`)
    }

    
  return (
    <div className="allpost_body">
      {
        searchedItem ? 
      <h1 >Search results for "{searchedItem}"</h1>
      : 
      <h1 >Product Listings</h1>
      }
  <div className='grid-container'>
    {data.map((item,index) => {
          return <div onClick={() => goToDetails(item.id)}>
          
          <img height="300" width="300" alt="ad image" src={item.images[0] ? item.images[0] : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"} ></img>
          
          <div className="product__cardbody" >
              <br/><h3 >Product Name: {item.title}</h3><br />
              <h3 >Price: {item.price}/-</h3   ><br/>
          </div>

        </div>
        })}
  </div>
  </div>
  )
}

export default AllPosts
