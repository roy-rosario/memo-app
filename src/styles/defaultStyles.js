import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle` 
    *{
        box-sizing: border-box;
        
    }

    body{
        background-color: ${props => props.theme === 'light'? '#9FA299' : '#1c1c1c'};
        transition: background-color 1s ease;
    }
`
