
import './App.css';
import {initializeFirebase} from './utils/firebase-config'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import React, {useState, useEffect} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {EntryBodyContextProvider} from './utils/entryBodyContext'


initializeFirebase()

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const auth = getAuth()
    
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route path="/signup" component={SignUp}/>
        <EntryBodyContextProvider>
          <Route path="/dashboard" component={Dashboard}/>
        </EntryBodyContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
