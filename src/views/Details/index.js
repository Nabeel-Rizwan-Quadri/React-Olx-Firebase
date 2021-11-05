import { useParams } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer/Footer"
import "./index.css"
import { useState, useEffect } from 'react'
import { getDataOnce } from '../../config/firebase'
import NavBar from '../../components/NavBar';

function Details() {

    const { adId } = useParams()
    const [adData, setAdData] = useState()
    let result

    useEffect(async() => {
        result = await getDataOnce(adId)
        setAdData(result)
        console.log("details AD Data: ", adData)
    }, [adData])

    return <div className='details_body'>
        <div className="details_header">
        <Header/>
        </div>
        <NavBar/>
        <div className="details_body">
            <h1>Welcome to the details page</h1>  
            <h1>AD id is {adId}</h1>
            <h1>AD id is {adData.uid}</h1>
            <h1>AD id is {adData.title}</h1>
            <h1>AD id is {adData.price}</h1>
            {<img src={adData.image[0]}/>}
        </div>
        <Footer/>
    </div>
}

export default Details
