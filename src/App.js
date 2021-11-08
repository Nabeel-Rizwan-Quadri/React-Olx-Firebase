import { useState } from 'react';
import { Provider } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PersistGate } from 'redux-persist/integration/react';

import Route from './config/router';
import {store, persistor} from './store'
import './App.css'

function App() {
  

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <div>
          <Route/>
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
