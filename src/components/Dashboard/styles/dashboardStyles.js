import styled, {css} from 'styled-components'

export const NavBar = styled.nav`
    background-color: ${props => props.theme === 'light'? 'azure' : '#474747'};
    color: ${props => props.theme === 'light'? 'black' : 'white'};
    padding: 1em;
    margin-bottom: 2em;

    display: flex;  
    justify-content: space-between;
    align-items: baseline;
    *{
        margin: 0;
    }

    h3{
        text-shadow: -3px -3px 1px ${props => props.theme === 'light'? 'lightblue' : 'black'};
    }

   @media (min-width: 600px){
       font-size: 1.25rem;
   }

`

export const AccountDrop = styled.div` 
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.5em;
    border: 1px solid gray;
    position: absolute;
    top: 2.5em;
    right: 0.75em;
    display: none;
    z-index: 0;

    &:hover{
        display: initial;
    }

    p{
        color: grey;
        &:hover{
            color: white;
        }
    }
 
`
export const NavTitle = styled.h4`
    font-weight: 500;
    cursor: default;

    padding-bottom: 1em;

    &:hover + ${AccountDrop}{
        display: initial;
    }
`

export const ThemeHolder = styled.div` 
    display: ${props => (props.activate? 'initial' : 'none')};
    width: 7em;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid grey;
    position: absolute;
    top: -0.07em;
    right: 4.6em;
    color: white;
    z-index: 2;


    &:hover{
        display: initial;
    }

    @media (min-width: 600px){
        top: -0.06em;
    }
`

export const ThemeSelect = styled.p` 
    cursor: pointer;
`

export const ThemeOptionLight = styled.div` 
    text-align: center;
    cursor: pointer;
    color: ${props => (props.theme === "light"? 'white' : 'lightgrey')};
    background-color: ${props => (props.theme === "light"? 'grey' : 'initial')};

`

export const ThemeOptionDark = styled.div` 
    text-align: center;
    cursor: pointer;
    color: ${props => (props.theme === "dark"? 'white' : 'lightgrey')};
    background-color: ${props => (props.theme === "dark"? 'grey' : 'initial')};
`

export const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 4em auto;

    @media (min-width: 1200px){
        width: 60%;
        flex-direction: row;
        align-items: initial;
        margin: 5em auto;
    }
`

export const LeftContainer = styled.div`
    width: 100%;

    @media (min-width: 1200px){
       
        display: flex;
        flex-direction: column-reverse;
        margin-right: 1em;
        width: 30%;
    }
`

const containerStyle = css` 
    padding: 1em;
    margin-bottom: 2em;
    background-color: ${props => props.theme === 'light'? 'azure' : '#474747'};
    color: ${props => props.theme === 'light'? 'black' : 'white'};
    border-radius: 5px;

    
`


export const QueryContainer = styled.div`
    ${containerStyle};

    
    h1{
        font-size: 3em;
        text-shadow: -5px -5px 1px ${props => props.theme === 'light'? 'lightblue' : 'black'}
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
        color: white;
    }

    @media (min-width: 600px){
        margin-bottom: 1em;
    }
`

export const StatusContainer = styled.div` 
    ${containerStyle};

    h3{
        margin-top: 0;
    }

    @media (min-width: 1200px){
        min-height: 500px;
    }
`

export const TaskContainer = styled.div` 
    height:400px;
  
    ${containerStyle};
    
    width: 100%;
    overflow-y: scroll;
    

    @media (min-width: 1200px){
        height: 640px;
        overflow-y: scroll;
        margin:0;
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
        background-color: ${props => props.theme === 'light'? '#0e869c' : '#7f5d87'};
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

