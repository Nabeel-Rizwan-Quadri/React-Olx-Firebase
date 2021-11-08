import { useSelector } from "react-redux";

import AllPosts from '../../components/AllPosts';
import NavBar from '../../components/NavBar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Dashboard() {
    const searchedItem = useSelector(state => state.searchReducer.searchedItem)

    return <div className='App'>
        <div className="dashboard_app">
          <div className='app_headder'><Header/></div>

            <NavBar/>
            <AllPosts searchedItem={searchedItem}/>
            <Footer/>
        </div>
    </div>
}

export default Dashboard
