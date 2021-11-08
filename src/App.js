import { useState } from 'react';
import { Provider } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Route from './config/router';
import store from './store'
import Header from './components/Header';
import Footer from './components/Footer';
// import NavBar from './components/NavBar';
import './App.css'

function App() {
  const auth = getAuth()

  const [userName, setUserName] = useState()
  console.log("userName", userName)

  onAuthStateChanged(auth, (user) => {
    if (user) {
        const displayName = user.displayName
        setUserName(displayName)
    }
    else{
        console.log("App.js no user")
    }
  });

  return (
    <Provider store={store}>

      <div className="App">
          {
            userName && <div className='app_headder'><Header/></div>
          }
          <Route/>
          {
          userName && <Footer/>
          }
      </div>

    </Provider>
  );
}

export default App;
