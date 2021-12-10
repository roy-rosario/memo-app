import styled, {css} from 'styled-components'

const containerStyle = css` 
    padding: 1em;
    margin-bottom: 3em;
    
    background-color: ${props => props.theme === 'light'? '#DCBE26' : '#474747'};
    color: ${props => props.theme === 'light'? 'white' : 'white'};
    border-top-left-radius: 30px 30px;
    border-bottom-right-radius: 30px 30px;
    box-shadow:  ${props => props.theme === 'light'? '0px -15px 1px lightblue' : '0px -15px 1px blueviolet'};
    /* border-top: 1px solid white;
    border-left: 1px solid white; */
    
    @media (min-width:1200px){
        margin-bottom: 0em;
        box-shadow:  ${props => props.theme === 'light'? '0px -15px 1px lightblue' : '-0px -15px 1px blueviolet'};
        border-top-left-radius: 30px 30px;
        border-bottom-right-radius: 30px 30px;
    }
`

export const NavBar = styled.nav`
    background-color: ${props => props.theme === 'light'? '#DCBE26' : '#474747'};
    color: ${props => props.theme === 'light'? 'white' : 'white'};
    padding: 1em;
    margin-bottom: 0em;
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
        font-family: 'Alfa Slab One', cursive;
        text-shadow: -3px -3px 1px ${props => props.theme === 'light'? 'lightblue' : 'blueviolet'};
        color: ${props => props.theme === 'light'? 'b#b8fff4' : 'lightskyblue'};
    }

   @media (min-width: 1200px){
       font-size: 1.25rem;
       padding: 1em 3em;
       margin-bottom: 3em;
   }

`

export const AccountDrop = styled.div` 
    background-color: ${props => props.theme === 'light'? '#ADD8E6' : '#7F5D87'};
    padding: 0.5em;
    border: 1px solid gray;
    position: absolute;
    top: 2.5em;
    right: 0.75em;
    display: none;

    border-bottom-right-radius: 30px 30px;

    &:hover{
        display: initial;
    }

    p{
        color: ${props => props.theme === 'light'? 'grey' : 'lightgrey'};
        &:hover{
            color: white;
        }
    }

    @media (min-width: 1200px){
        right: 3em;
    }
 
`
export const NavAccountName = styled.h4`
    font-weight: 500;
    cursor: default;
    color: ${props => props.theme === 'light'? 'white' : 'lightskyblue'};
    padding-bottom: 1em;

    &:hover + ${AccountDrop}{
        display: initial;
    }
`

export const ThemeHolder = styled.div` 
    display: ${props => (props.activate? 'initial' : 'none')};
    width: 7em;
    border: 1px solid grey;
    position: absolute;
    top: -0.07em;
    right: 4.6em;

    border-top-left-radius: 30px 30px;
    background-color: none;
    border-right: none;

    &:hover{
        display: initial;
    }

    @media (min-width: 1200px){
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
    background-color: ${props => (props.theme === "light"? '#ADD8E6' : 'rgba(0,0,0,0.25)')};
    border-top-left-radius: 30px 30px;
    padding: 0.25em;
    
`

export const ThemeOptionDark = styled.div` 
    text-align: center;
    cursor: pointer;
    color: ${props => (props.theme === "dark"? 'white' : 'lightgrey')};
    background-color: ${props => (props.theme === "dark"? '#7F5D87' : 'rgba(0,0,0,0.25)')};
    padding: 0.25em;
  

`


// ----------- Main Components ------------

export const GreaterContainer = styled.div` 


@media (min-width: 1200px){
        display: flex;
        align-items: center;
        justify-content: center;
       
}
`


export const SubContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;


    margin: 0em auto 0em auto;
    
    h1,h2,h3,h4{
        
        color: ${props => props.theme === 'light'? 'b#b8fff4' : 'white'};
        transition: color 1s ease;
    }


    @media (min-width: 1200px){
        width: 75%;
        flex-direction: row;
        align-items: center;
        margin: 5em auto;
        padding-left: 2em;
    }
`

export const MiddleContainer = styled.div`
    width: 100%;
    
    @media (min-width: 1200px){
        height: 700px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        margin-right: 2.5em;
        width: 40%;
        padding: 0;
        margin-top: 0; 
    }
`




export const QueryContainer = styled.div`
    ${containerStyle};

    h4{
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        font-size: 2.2em;
        font-weight: 400;
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

    @media (min-width: 1200px){
        margin-bottom: 0em;
        padding: 1.65em 1em;
        width: 100%;
    }
`

export const StatusContainer = styled.div` 
    ${containerStyle};

    h3{
        margin-top: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        
        font-size: 2em;
    }
    
    h4{
        font-size: 1.25em;
        display: inline;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        
        text-shadow: none;
    }

    @media (min-width: 1200px){
        width: 100%;
        font-size: 1.25rem;
        min-height: 475px;
        
    }
`

export const TaskContainer = styled.div` 
    ${containerStyle};
    width: 100%;
    padding: 1em 2em;
    h2{
        font-size: 3em;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        margin: 0;
    }
  
    
 
    
  
    @media (min-width: 1200px){
        height: 700px;
        font-size: 1.1rem;
        width: 100%;
        padding-left: 3.5em;
        border-bottom-right-radius: 30px 30px;
        h2{
            font-size: 3.5em;
        }
    }
`


export const TaskWindow = styled.div` 
    ${containerStyle};
    box-shadow: none;
    color: ${props => (props.theme === 'light'? 'black' : 'white')};
    position: relative;
    min-height: 350px;
  
    @media (min-width: 1200px){
        height: 500px;
        box-shadow: none;
    }
`
const taskEntryStandard = css` 
        margin-bottom: 0.5em;
        align-items: center;
        margin-bottom: 1em;
        padding: 1em;
        background-color: ${props => (props.theme === 'light'? 'lightblue': '#7F5D87')};
        border-radius: 10px;
`
export const TaskEntry = styled.div` 
    background: ${props => (props.theme === 'light'? 'lightblue' : 'blueviolet')};
    border-radius: 10px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 310px;
    width: 75%;
    transform: ${props => (props.flip? 'rotateY(180deg)' : 'rotateY(0deg)')};
    transition: transform 0.5s ease;
    /* position: absolute; */
    /* z-index: ${props => (props.depth)}; */
  
` 
export const TaskEntrySub = styled.div` 
    ${taskEntryStandard};
    background: ${props => (props.theme === 'light'? 'white': 'grey')};
    margin: 0em auto 0em auto;
    width: 100%;
    height: 210px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    padding-right: 3em;

    h2{
        font-size: 1.75em;
        text-shadow: none;
        font-weight: 700;
        padding-bottom: 0.5em;
    }

    h3{
        text-shadow: none;
    }

    p{
        margin-top:0;
        font-weight: 600;
        color: grey;
        margin-bottom: 1em;
    }

    @media (min-width: 1200px){
     ${taskEntryStandard};
    }


`


export const InfoContainer = styled.div` 
    ${containerStyle};
    
    z-index: -1;
    width: 100%;
    padding: 0.5em 1em;
    box-shadow: none;
    position: relative;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 1em 0.5em 3em 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    

    &:before{
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-image: url("./images/night-image.jpg");
        background-size: cover;
        background-position: center;
        opacity: 0.8;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
        z-index: -1;
    }

    

    @media (min-width: 1200px){
        width: 28%;
        height: 700px;
        background-color: initial;
        box-shadow:  none;
        /* border: ${props => (props.theme === 'light'? '10px solid lightblue' : '10px solid blueviolet')};
        border-bottom: ${props => (props.theme === 'light'? '10px solid lightblue' : '10px solid blueviolet')}; */
        display: flex;
        flex-direction: column;
        align-items: initial;
        margin-right: 2em;
        padding:1em;
        border-top-left-radius: 30px 30px;
        border-bottom-right-radius: 30px 30px;

        &:before{
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-image: url("./images/night-image.jpg");
        background-size: cover;
        background-position: bottom;
        opacity: 0.5;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 20px 20px;
        }
    }
`

export const WeatherHolder = styled.div` 
    
    text-align: right;
    position: relative;
    display: flex;
    align-items: center;
    h2{
     
        margin-left: 0.25em;
        font-size: 1.25em;
        display: inline;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        margin-top: 0;
    }

    i{
        
        font-size: 1.25em;
    }

    

    @media (min-width: 1200px){
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding-bottom: 2em;
        
        h2{
            font-size: 1.5em;
            margin-top: 0em;
            margin-bottom: 0.25em;
        }

        i{
            font-size: 1.5em;
            
        }
    }   
`

export const WeatherCombo = styled.div` 
    margin-top: 1em;
    display: flex;
    flex-direction: column;
`

export const TempTitle = styled.div` 
    font-size: 2.5em;    

    @media (min-width: 1200px){
        h2{font-size: 1.5em;}
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
    background: ${props => (props.theme === 'light'? '#CF8600': '#7F5D87')};
    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    min-height: 64px;
    i{
        font-size: 2em;
        
    }
`

const iconStyle = css` 
    cursor: pointer;
    padding: 1em 0em;
    background: ${props => (props.theme === 'light'? '#CF8600': '#7F5D87')};
    width: 100%;
    text-align: center;
    border: ${props => (props.theme === 'light'? '4px solid #a86d00': '4px solid #604666')};
    &:hover{
        background:  ${props => (props.theme === 'light'? '#d98c00': '#8e6896')};

    }
`
export const CompleteIcon = styled.div` 
    ${iconStyle};
    border-top: none;
    border-left: none;
    border-bottom: none;
    border-bottom-left-radius: 10px;
`

export const DeleteIcon = styled.div` 
    ${iconStyle};
    /* border-right: 1px solid black;
    border-left: 1px solid black; */
    border: none;
`


export const ArchiveIcon = styled.div` 
    ${iconStyle};
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-bottom-right-radius: 10px;
    
`

export const TimeTitle = styled.h2` 
    font-size: 3.5em;
   
    padding: 0;
    margin-top: 0.1em;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    position: relative; 
   
    @media (min-width:1200px){
        margin-top: 0;
        font-size: 8em;
        font-weight: 100;
    }

   
`

export const TimePic = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        max-width: 100%;
        margin:0;
    }
`
