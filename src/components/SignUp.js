import React, {useState, useEffect} from 'react'
import {MainContainer} from '../styles/allStyles' 
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {useHistory, Link} from 'react-router-dom'

function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth()
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("token")){
            history.push('/dashboard')
        }
    },[])
    

    const onSignUp = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {displayName: name})
            .then(history.push('/'))
        })
        .catch(err => alert(err.message))
    }

    return(
        <MainContainer>
            <h1>Sign Up</h1>

            <label>Name</label>
            <input
                value={name}
                type = 'text'
                onChange = {(e => setName(e.target.value))}
            />

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

            <button onClick={onSignUp}>Sign Up</button>

            <Link to="/">Already have an account?</Link>
        </MainContainer>
    
    )
}

export default SignUp