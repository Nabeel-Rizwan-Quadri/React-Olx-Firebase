import logo from './logo.svg';
import { useState, useEffect } from 'react' //hooks (built in functions)
import Auth from './views/Auth'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Auth />
      </header>
    </div>
  );
}

/*
 1. App 
 2. Pickup
 3. CustomButton
*/

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