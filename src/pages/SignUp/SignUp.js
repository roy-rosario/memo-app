import React, {useState, useEffect, useContext} from 'react'
import {MainContainer, StanButton, Logo, PageTitle, TotalContainer, Disclaimer} from '../../styles/defaultStyles' 
import {useHistory, Link} from 'react-router-dom'
import {signUpService} from '../../services/authServices'
import { ThemeContext } from '../../utils/themeContext'



function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [password, setPassword] = useState('')
    const history = useHistory()
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        if(localStorage.getItem("token")){
            history.push('/dashboard')
        }

        setLoaded(true)

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
        <TotalContainer style={{paddingBottom: '0em'}}>
            <Logo 
                theme={theme} 
                loaded={loaded}
                margin= {"1em"}
            >
                memo-app
            </Logo>
            <MainContainer theme={theme}  onSubmit={onSignUp} >


                <PageTitle theme={theme}>Sign Up</PageTitle>

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
            <Disclaimer>
                <p>
                    Disclaimer: Email verification is not necessary. You can enter any email in the format of <b>name@site.com</b>, preferably non-existent ones, to sign up and log in.
                </p>

            </Disclaimer>
        </TotalContainer>
        
    )
}

export default SignUp