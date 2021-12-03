import styled, {css} from 'styled-components'

const containerStyle = css` 
    padding: 1em;
    margin-bottom: 3em;
    background-color: ${props => props.theme === 'light'? '#DCBE26' : '#474747'};
    color: ${props => props.theme === 'light'? 'white' : 'white'};
    border-top-left-radius: 30px 30px;
    border-bottom-right-radius: 30px 30px;
    box-shadow:  ${props => props.theme === 'light'? '-15px -15px 1px lightblue' : '-15px -15px 1px blueviolet'};
    /* border-top: 1px solid white;
    border-left: 1px solid white; */
    
    @media (min-width:1200px){
        margin-bottom: 2em;
    }
`

export const NavBar = styled.nav`
    background-color: ${props => props.theme === 'light'? '#DCBE26' : '#474747'};
    color: ${props => props.theme === 'light'? 'white' : 'white'};
    padding: 1em;
    margin-bottom: 4em;
    /* border-bottom: ${props => (props.theme === 'light'? '5px solid #CF8600' : '5px solid #7F5D87')}; */
    box-shadow: ${props => (props.theme === 'light'? '0px 5px 1px #CF8600' : '0px 5px 1px #7F5D87')};

    display: flex;  
    justify-content: space-between;
    align-items: baseline;
    *{
        margin: 0;
    }

    h2{
        font-size: 1.25em;
        font-family: 'Alfa Slab One', 'cursive';
        text-shadow: -3px -3px 1px ${props => props.theme === 'light'? 'lightblue' : 'blueviolet'};
    }

   @media (min-width: 600px){
       font-size: 1.25rem;
       margin-bottom: 5em;
       padding: 1em 3em;
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

    @media (min-width: 1200px){
        right: 3em;
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


// ----------- Main Components ------------



export const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2em;
    width: 90%;
    margin: 0em auto 0em auto;
    
    h1,h2,h3,h4{
        text-shadow: -3px -3px 1.5px ${props => props.theme === 'light'? 'grey' : 'lavender'};
      
    }

    @media (min-width: 1200px){
        width: 75%;
        flex-direction: row;
        align-items: center;
        margin: 5em auto;
    }
`

export const LeftContainer = styled.div`
    width: 100%;

    @media (min-width: 1200px){
       
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        margin-right: 2.5em;
        width: 30%;
    }
`




export const QueryContainer = styled.div`
    ${containerStyle};

    h4{
        margin: 0;
        font-family: 'Baloo Bhaijaan 2', 'cursive'; 
        font-size: 2.2em;
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
        margin-bottom: 2.5em;
        padding: 1.65em 1em;
    }
`

export const StatusContainer = styled.div` 
    ${containerStyle};

    h3{
        margin-top: 0;
        font-family: 'Baloo Bhaijaan 2', 'cursive'; 
        font-size: 2em;
    }
    
    h4{
        font-size: 1.25em;
        display: inline;
        font-family: 'Baloo Bhaijaan 2', 'cursive';
        text-shadow: none;
    }

    @media (min-width: 1200px){
       font-size: 1.25rem;
        min-height: 450px;
    }
`

export const TaskContainer = styled.div` 
    
    h2{
        font-size: 3em;
        font-family: 'Baloo Bhaijaan 2', 'cursive'; 
        margin: 0;
    }
  
    ${containerStyle};
    
    width: 100%;
    
  
    @media (min-width: 1200px){
        font-size: 1.1rem;
        width: 60%;
        padding-right: 2em;
        padding-left: 2em;
        margin-right: 1.5em;
        h2{
            font-size: 3.5em;
        }
    }
`
export const taskHeader = styled.div` 

`

export const TaskWindow = styled.div` 
    ${containerStyle};
    box-shadow: none;
    overflow-y: scroll;
    height: 270px;
    border: ${props => (props.theme === 'light'? '2px solid lightgray' : '3px solid #333333')};
    background-color: ${props => (props.theme === 'light'? 'white' : '#616060')};
    color: ${props => (props.theme === 'light'? 'black' : 'white')};

    @media (min-width: 1200px){
        height: 500px;
    }
`


export const TaskEntry = styled.div` 
    margin-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => (props.theme === "light"? '1px solid black' : '1px solid lightgrey')};
`


export const RightContainer = styled.div` 
    ${containerStyle};
    width: 100%;
  

    
    @media (min-width: 1200px){
        width: 28%;
        height: 640px;
        background-color: initial;
        box-shadow:  none;
        border: ${props => (props.theme === 'light'? '10px solid lightblue' : '10px solid blueviolet')};
        /* border-bottom: ${props => (props.theme === 'light'? '10px solid lightblue' : '10px solid blueviolet')}; */

        display: flex;
        justify-content: center;
        
    }
`




// ----------- buttons / icons ----------------

export const StanButton = styled.button` 

        padding: 0.5em 1em;
        background-color: ${props => props.theme === 'light'? '#cf8600' : '#7f5d87'};
        color: white;
        border-radius: 3px;
        margin-right: 0.5em;
        cursor: pointer;
        border: none;
        text-transform: uppercase;

        &:disabled{
            cursor: initial;
            background-color: ${props => props.theme === 'light'? '#915e00' : '#59425e'};
            color: lightgrey;
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

export const IconHolder = styled.div` 
    display: flex;
    justify-content: space-between;
`
export const CompleteIcon = styled.div` 
    cursor: pointer;
    border-right: 1px solid black;
    margin-right: 0.5em;    
    padding-right: 0.5em;
`

export const DeleteIcon = styled.div` 
    cursor: pointer;
    border-right: 1px solid black;
    margin-right: 0.5em;    
    padding-right: 0.5em;
`


export const ArchiveIcon = styled.div` 
    cursor: pointer;
    color: ${props => (props.theme === "light"? 'black' : 'white')};
`

export const TimeTitle = styled.h2` 
    font-size: 4em;
    font-weight: 300;
    padding: 0;
    margin:0;
    font-family: 'Cousine', monospace;
    word-wrap: break-word;
    line-height: 0.8em;
    

    @media (min-width:1200px){
        width: 120px;
        font-size: 6em;
    }

   
`