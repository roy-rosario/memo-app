import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle` 
    *{
        box-sizing: border-box;
        
    }

    html{
        min-height: 100%;
    }

    body{
        background: ${props => props.theme === 'light'? 'linear-gradient(to top, #C48400, #9FA499 55% )' : 'linear-gradient(to top right, #2a14f5, #171717 45% )'};
        transition: background-color 1s ease;

    }
`


// ---- simultaneous styles for login / sign up ----

export const TotalContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-bottom: 15em;
`

export const Logo = styled.h1` 
    font-family: 'Alfa Slab One', 'cursive';
    text-shadow: -3px -3px 1px ${props => props.theme === 'light'? 'lightblue' : 'blueviolet'};
    color: ${props => props.theme === 'light'? 'white' : 'lightskyblue'};
    font-size: 3em;
    text-align: center;
    margin: 0;
    margin-bottom: ${props => (props.loaded? `${props.margin}` : "0")};
    transition: margin 1.5s ease;
`

export const PageTitle = styled.h2` 
        font-family: 'Baloo Bhaijaan 2', 'cursive'; 
        font-size: 3em;
        text-shadow: -5px -5px 1px ${props => props.theme === 'light'? 'lightblue' : 'blueviolet'};
        margin-bottom: 0;
`

export const MainContainer = styled.form` 
    width: 70%;
    margin: 0 auto 0 auto;
    padding: 1em;
    background-color: ${props => props.theme === 'light'? '#DCBE26' : '#474747'};
    color: ${props => props.theme === 'light'? 'white' : 'white'};
    border-radius: 5px;
   
    
    h1,h2,h3,h4{
        text-shadow: -3px -3px 1px ${props => props.theme === 'light'? '#CF8600' : '#7F5D87'};
        color: ${props => props.theme === 'light'? 'b#b8fff4' : 'lightskyblue'};
        transition: color 1s ease;
    }


    @media (min-width: 600px){
        width: 40%;
    }

    @media (min-width: 1200px){
        width: 25%;
    }


    input{
        display: block;
        width: 100%;
        padding: 0.5em 1em;
        border-radius: 3px;
        border: 1px solid gray;
        margin-bottom: 1em;
    }

    

    a{
        text-decoration: none;
        color: ${props => props.theme === 'light'? 'black' : 'white'};
    }


`


export const TaskEntry = styled.div` 
    margin-bottom: 0.5em;

    display: flex;
    justify-content: space-between;
    align-items: baseline;

    
`

export const StanButton = styled.button` 

        padding: 0.5em 1em;
        background-color: ${props => props.theme === 'light'? 'orange' : '#7f5d87'};
        color: white;
        border-radius: 3px;
        margin-right: 0.5em;
        cursor: pointer;
        border: none;
        text-transform: uppercase;

        &:disabled{
            cursor: initial;
            background-color: ${props => props.theme === 'light'? '#0a6170' : '#59425e'};
            color: grey;
        }

` 

export const ThemeButton = styled.button` 
    display: block;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    padding: 0.5em 1em;
    text-transform: uppercase;
    background: ${props => props.theme === 'light'? 'darkslateblue' : 'azure'};
    color: ${props => props.theme === 'light'? 'white' : 'black'};
    /* transform: translateX(${props => props.theme === 'light'? '0px' : '550px'});
    transition: transform 0.5s ease; */
    margin: ${props => props.theme === 'light'? 'initial' : '0 0 0 auto'};
    transition: margin 7s ease;
`