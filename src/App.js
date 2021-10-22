import { useState, useEffect } from 'react' //hooks (built in functions)
import Signup from './views/Auth/Signup';
import Login from './views/Auth/Login';
import CreateAd from './views/Auth/Ad';
import Home from './views/Auth/Home';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {

  const [screen, setScreen] = useState("signup")

  let currentuser = true

  const auth = getAuth();

//   onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;

//     // setCurrentUser(true)
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log("user not loged in")
//   }
// });

  const login = () =>{
    setScreen("login")
  }
  
  const signup = () =>{
    setScreen("signup")
  }

  return (
    <div className="App">
      <header className="">
        { currentuser ?
          <Home/>
          :
          <>{
            screen == "login" && <><Login /><button onClick={signup}>click here for signup</button></>
          }
          {
            screen == "signup" && <><Signup/><button onClick={login}>click here for Login</button></>
          }</>
        }        
      </header>
    </div>
  );
}

export default App;

/*
 1. Create project in firebase
 2. npm i -g firebase-tools
 3. firebase login
 4. firebase init
// Every time when you need to update the deployment
 5. npm run build
 6. firebase deploy
*/
 