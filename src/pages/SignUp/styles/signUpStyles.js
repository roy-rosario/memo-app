import styled from 'styled-components'


export const MainContainer = styled.form` 
    width: 80%;
    margin: 15em auto 0 auto;
    padding: 1em;
    background-color: ${props => props.theme === 'light'? 'azure' : 'steelblue'};
    color: ${props => props.theme === 'light'? 'black' : 'white'};
    border-radius: 5px;

    @media (min-width: 600px){
        width: 25%;
    }
  
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
        background-color: ${props => props.theme === 'light'? 'cadetblue' : 'rebeccapurple'};
        color: white;
        border-radius: 3px;
        margin-right: 0.5em;
        cursor: pointer;
        border: none;
        text-transform: uppercase;

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