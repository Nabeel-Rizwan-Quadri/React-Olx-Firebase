import { useState } from 'react' //hooks (built in functions)
import Route from './config/router';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  // const auth = getAuth();
  // const [user, setUser] = useState("")

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user)
  //     // ...
  //   } else {
  //   }
  // });

  return (
    <div className="App">
      <header className="">
        <Route/>
      </header>
    </div>
  );
}

export default App;
