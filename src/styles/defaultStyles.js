import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle` 
    *{
        box-sizing: border-box;
        
    }

    body{
        background-color: ${props => props.theme === 'light'? '#D19C03' : '#1c1c1c'};
        transition: background-color 1s ease;
    }
`
