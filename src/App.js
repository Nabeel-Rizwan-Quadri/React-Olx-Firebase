import { useState } from 'react' //hooks (built in functions)
import Route from './config/router';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const [user, setUser] = useState("")
  
  const auth = getAuth();
  console.log("app ", user)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(!!user)
      setUser(user)
      console.log("if ", user.uid)
      // ...
    } else {
    }
  });

  return (
    <div className="App">
      <header className="">
        <Route/>
      </header>
    </div>
  );
}

export default App;
