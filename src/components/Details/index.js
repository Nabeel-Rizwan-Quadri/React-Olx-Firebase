import { useParams } from 'react-router-dom'
import Header from "../Header"
import Footer from "../Footer/Footer"
import "./index.css"
import react, { useState, useEffect } from 'react'
import { getDataOnce } from '../../config/firebase'
import NavBar from '../NavBar';


function Details() {

    const { adId } = useParams()
    const [adData, setAdData] = useState({})

    useEffect(async() => {
        const adData = await getDataOnce(adId)
        setAdData(adData)
    }, [])

    console.log(adData)

    return <div className='details_body'>
        <div className="details_header">
        <Header/>
        </div>
        <NavBar/>
        <div className="details_card">
            <h1>Product Details</h1>

            <div class="details-grid-container">

                <div class="details-grid-item item1">
                    <img height="80%" width="80%" alt="ad image" src={adData.images ? adData.images[0] : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"} ></img>
                </div>

                <div class="details-grid-item item2">  
                        <h4>Product Info:-</h4>
                        <p >Product Name: {adData.title}</p>
                        <p >Product Category: {adData.Category}</p>
                        <p >Price: {adData.price}/-</p>
                </div>

                <div class="details-grid-item item3">
                    <h4>Sellers info:-</h4>
                    <p>Name: {adData.userName}</p>    
                    <p>Contact No: {adData.number}03090078601</p>    
                    <p>Location: {adData.location}Karachi</p>    
                      
                </div>  
                
                <div class="details-grid-item item4">
                    <h4>Product Description:-</h4>
                    <p>{adData.description}</p>
                    <h4>Created At:-</h4>
                    <p>{adData.createdAt}</p>  
                </div>
                </div>

        </div>
        
        <Footer/>
    </div>
}

export default Details
