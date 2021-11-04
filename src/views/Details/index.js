import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer/Footer"


function Details() {
    const { id } = useParams()
    const history = useHistory()

    console.log("adid", id)

    const back = () =>{
        history.push("/")
    }

    return <div className='App'>
        <Header/>
        <h1>Welcome to the details page</h1>
        {/* <h1>AD id is {{adId}}</h1> */}
        <button onClick={back}>Back</button>
        <Footer/>
    </div>
}

export default Details
