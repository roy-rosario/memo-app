import React, {useState, useEffect, useContext} from 'react'
import {MainContainer, PageTitle, StanButton} from '../../styles/defaultStyles' 
import {useHistory, Link} from 'react-router-dom'
import {LogInService} from '../../services/authServices'
import {ThemeContext} from '../../utils/themeContext'

function LogIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        if(localStorage.getItem("token")){
            history.push('/dashboard')
        }
    },[])
    

    const onLogIn = async(e) =>{
        e.preventDefault()
       let check = await LogInService(email, password)

       if(check){
           history.push('/dashboard')
       }
       
    }

    return(
        <MainContainer theme={theme} onSubmit={onLogIn}>
            <PageTitle theme={theme}>Log In</PageTitle >

            {/* {error & <p>Oops! Try again</p>} */}
        
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

            <StanButton type="submit" theme={theme}>Log In</StanButton>

            <Link to="/signup">Don't have an account?</Link>
        </MainContainer>
    
    )
}

export default LogIn