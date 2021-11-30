import React, {useState, useEffect, useContext} from 'react'
import {MainContainer, StanButton} from './styles/signUpStyles' 
import {useHistory, Link} from 'react-router-dom'
import {signUpService} from '../../services/authServices'
import { ThemeContext } from '../../utils/themeContext'



function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        if(localStorage.getItem("token")){
            history.push('/dashboard')
        }
    },[])
    

    const onSignUp = async(e) =>{
        e.preventDefault()
        let check 

        check = await signUpService(name, email, password)
        console.log(check)
  

        if(check === true){
            history.push('/')
        }
    }

    return(
        <MainContainer theme={theme} onSubmit={onSignUp}>
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

            <StanButton theme={theme} type="submit">Sign Up</StanButton>

            <Link to="/">Already have an account?</Link>
        </MainContainer>
    
    )
}

export default SignUp