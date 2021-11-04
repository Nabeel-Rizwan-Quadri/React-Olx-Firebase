import { useParams } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer/Footer"
import "./index.css"

function Details() {
    const { id } = useParams()

    console.log("adid", id)

    return <div className='details_body'>
        <div className="details_header">
        <Header/>
        </div>
        <div className="details_body">
            <h1>Welcome to the details page</h1>  
            <h1>AD id is {id}</h1>
        </div>
        <Footer/>
    </div>
}

export default Details
