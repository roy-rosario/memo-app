import styled from 'styled-components'

export const NavBar = styled.nav`
    background-color: ${props => props.theme === 'light'? 'azure' : 'steelblue'};
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
        text-shadow: -3px -3px 1px ${props => props.theme === 'light'? 'lightblue' : 'darkslateblue'};
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
    padding: 0.5em;
    position: absolute;
    top: -0.07em;
    right: 4.5em;
    color: white;
    z-index: 2;


    &:hover{
        display: initial;
    }
`

export const ThemeSelect = styled.p` 
    cursor: pointer;
`

export const ThemeOption = styled.div` 
    text-align: center;
    cursor: pointer;
`

export const MainContainer = styled.div`
    padding: 1em;
    background-color: ${props => props.theme === 'light'? 'azure' : 'steelblue'};
    color: ${props => props.theme === 'light'? 'black' : 'white'};
  
    h1{
        font-size: 3em;
        text-shadow: -5px -5px 1px ${props => props.theme === 'light'? 'lightblue' : 'darkslateblue'}
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
`

export const TaskEntry = styled.div` 
    margin-bottom: 0.5em;

    display: flex;
    justify-content: space-between;
    align-items: baseline;

    
`

export const StanButton = styled.button` 

        padding: 0.5em 1em;
        background-color: ${props => props.theme === 'light'? 'cadetblue' : 'rebeccapurple'};
        color: white;
        border-radius: 3px;
        margin-right: 0.5em;
        cursor: pointer;
        border: none;
        text-transform: uppercase;

        &:disabled{
            cursor: initial;
            background-color: ${props => props.theme === 'light'? '#447475' : 'r#502978'};
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

