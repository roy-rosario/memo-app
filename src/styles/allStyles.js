import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    *{
        box-sizing: border-box;
    }

    body{
        background-color: orchid;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const MainContainer = styled.div` 
    width: 350px;
    padding: 1em;
    background-color: teal;
    color: white;
    border-radius: 5px;
    text-shadow: -5px -5px 1px orchid;
    h1{
        font-size: 3em;
        
    }

    input{
        display: block;
        width: 100%;
        padding: 0.5em 1em;
        border-radius: 3px;
        border: 1px solid gray;
        margin-bottom: 1em;
    }

    button{
        border: 1px solid white;
        padding: 0.5em 1em;
        background-color: forestgreen;
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
        text-shadow: -5px -5px 1px orchid;
        border-radius: 3px;
        margin-right: 0.5em;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: white;
    }
`