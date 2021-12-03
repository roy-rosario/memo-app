import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle` 
    *{
        box-sizing: border-box;
        
    }

    body{
        background: ${props => props.theme === 'light'? 'linear-gradient(to top, #C48400, #9FA499 45% )' : 'linear-gradient(to top right, #2a14f5, #171717 45% )'};
        transition: background-color 1s ease;
    }
`
