import React, {useState, useEffect} from 'react'
import {MainContainer} from '../styles/allStyles' 
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {useHistory, Link} from 'react-router-dom'

function LogIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth()
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("token")){
            history.push('/dashboard')
        }
    },[])
    

    const onLogIn = () =>{
       signInWithEmailAndPassword(auth, email, password)
       .then(userCredential => {localStorage.setItem('token', userCredential._tokenResponse.idToken)
        history.push("/dashboard")})
        .catch(err => alert(err.message))
    }

    return(
        <MainContainer>
            <h1>Log In</h1>

        
            <label>Email</label>
            <input
                value={email}
                type = 'email'
                onChange = {(e => setEmail(e.target.value))}
            />

            <label>Password</label>
            <input
                value={password}
                type = 'password'
                onChange = {(e => setPassword(e.target.value))}
            />

            <button onClick={onLogIn}>Log In</button>

            <Link to="/signup">Don't have an account?</Link>
        </MainContainer>
    
    )
}

export default LogIn