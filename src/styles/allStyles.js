import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle` 
    *{
        box-sizing: border-box;
        
    }

    body{
        background-color: ${props => props.theme === 'light'? 'lightblue' : 'darkslateblue'};
        transition: background-color 1s ease;
    }
`
