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
        color: ${props => props.theme === 'light'? 'b#b8fff4' : 'white'};
    }

   @media (min-width: 1200px){
       font-size: 1.25rem;
       padding: 1em 3em;
       margin-bottom: 1.5em;
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
    color: white;
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
        margin-bottom: 0em;
        margin-top: 3em;
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
        
    }


    @media (min-width: 1200px){
        width: 75%;
        flex-direction: row;
        align-items: center;
        margin: 3.25em auto;
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
        width: 50%;
        padding: 0;
        margin-top: 0; 
    }
`

export const QueryHolder = styled.div`
    position: relative;
`


export const QueryContainer = styled.div`
    ${containerStyle};
    justify-content: space-between;
    padding: 1em 1.75em;

    h4{
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        font-size: 2.25em;
        font-weight: 400;
    }


    a{
        text-decoration: none;
        color: white;
    }
    display: none;


    @media (min-width: 1200px){
        display: flex;
        margin-bottom: 0em;
        padding: 2em 1.75em 2.5em 1.75em;
        width: 100%;

        h4{
            font-size: 2.75em;
        }
    }
`

export const StatusContainer = styled.div` 
    ${containerStyle};
    position: relative;

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
    display: none;

    @media (min-width: 1200px){
        width: 100%;
        font-size: 1.25rem;
        min-height: 520px;
        display: block;
    }
`


export const ListTypeTray = styled.div` 
    display: flex;
    justify-content: space-evenly;

    @media (min-width: 1200px){
        margin-top: 0em;
    }
`

export const TaskHeader = styled.div` 
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 1200px){
        align-items: center;
        padding: 0 1em;
    }
`

export const TaskContainer = styled.div` 
    ${containerStyle};
    width: 100%;
    padding: 1em;
    
    margin-bottom: 0.5em;
    min-height: 425px;
    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin: 0;
        font-size: 1.25em;
    }
  

  
    @media (min-width: 1200px){
        height: 700px;
        font-size: 1.1rem;
        width: 100%;
        padding: 1em 2em;
        border-bottom-right-radius: 0px;
        h2{
            font-size: 3.5em;
        }

        button{
            font-size: initial;
        }
    }
`


export const TaskTitle = styled.h2` 
   margin-top:0em;

`


export const TaskWindow = styled.div` 
    ${containerStyle};
    box-shadow: none;
    color: ${props => (props.theme === 'light'? 'black' : 'white')};
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    padding-top: 1em;
    margin-bottom: 0em;
    @media (min-width: 1200px){
        height: 500px;
        box-shadow: none;
        display: block;
        overflow: none;
    }
`
const taskEntryStandard = css` 
        margin-bottom: 0.5em;
        align-items: center;
        margin-bottom: 1em;
        padding: 1em;
        background-color: ${props => (props.theme === 'light'? 'lightblue': '#7F5D87')};

        
        
`
const taskEntryStyle = css` 
    background: ${props => (props.theme === 'light'? 'lightblue' : 'blueviolet')};
    margin: 0 0.5em 0 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 310px;
    width: 100%;
    transform: ${props => (props.flip? 'rotateY(360deg)' : 'rotateY(0deg)')};
    transition: transform 0.5s ease;
    border-top-left-radius: 30px 30px;
    border-bottom-right-radius: 30px 30px;
    

    @media (min-width: 1200px){
        min-height: initial;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
        padding-left: 1.5em;
    }

  
`

export const TaskEntrySmall = styled.div`
    ${taskEntryStyle};
    
    @media (min-width:1200px){
        display: none;
    }
`

export const TaskEntryLarge = styled.div`
    ${taskEntryStyle};

    @media (max-width:1199px){
        display: none;
    }
`

export const TaskEntrySub = styled.div` 
    ${taskEntryStandard};
    background: ${props => (props.theme === 'light'? 'white': 'grey')};
    margin: 0em auto 0em auto;
    width: 100%;
    height: 210px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    padding-right: 1.5em;
    border-top-left-radius: 30px 30px;
    
    

    h2{
        font-size: 1.25em;
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
        color: ${props =>(props.theme === 'light'? 'grey':'lightgrey')};
        margin-bottom: 1em;
    }
    

    @media (min-width: 1200px){
       height:100%;
       margin: 0;
       display: flex;
       justify-content: space-between;
       padding: 0.5em 1em 0.5em 1.5em; 
       border-bottom-right-radius: 30px 30px;
       align-items: center;

       h3{
           margin-bottom: 0.25em;
           padding: 0;
           font-size: 0.9em;
        }

       h2{
           font-size: 1em;
           margin-bottom: 0;
           padding: 0;
       }

       p{
           margin-bottom: 0.5em;
           padding:0;
           font-size: 0.8em;
           font-weight: 500;
       }
    }


`

export const InfoHeader = styled.div` 
    display: flex; 
    justify-content: space-between; 
    
`


export const infoContainerStyle = css` 
    ${containerStyle};
    
    z-index: -1;
    width: 100%;
    box-shadow: none;
    position: relative;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 1em;
    text-shadow: 0px 0px 3px black;
    min-height: 250px;
    

    &:before{
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        /* background-image: ${props => (props.theme === 'light'? `url("./images/light-beach.jpg")` : 'url("./images/dark-beach.jpg")')}; */
        background-image: ${props => (props.picture)};
        background-size: cover;
        background-position: center;
        opacity: 0.7;
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
        justify-content: space-between;
        margin-right: 1em;
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
        /* background-image: ${props => (props.theme === 'light'? `url("./images/light-beach.jpg")` : 'url("./images/dark-beach.jpg")')}; */
        background-image: ${props => (props.picture)};
        background-size: cover;
        background-position: bottom;
        opacity: 0.5;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 20px 20px;
        }
    }
`


export const InfoContainerSmall = styled.div`
   ${infoContainerStyle};

    @media (min-width: 1200px){
        display: none;
    }
`

export const InfoContainerLarge = styled.div`
    ${infoContainerStyle};

    @media (max-width: 1199px){
        display: none;
    }
`


export const WeatherHolder = styled.div` 
    
    text-align: right;
    position: relative;
    display: flex;
    align-items: flex-start;
    h2{
     
        margin-left: 0.25em;
        font-size: 1.25em;
        display: inline;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin-top: 0;
    }

    i{
        
        font-size: 1em;
    }

   

    @media (min-width: 1200px){
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding-bottom: 2em;
        margin-top: 4.5em;
        
        h2{
            font-size: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 300;
        }

        i{
            font-size: 1.5em;
            
        }
    }   
`

export const WeatherCombo = styled.div` 
    margin-top: 0;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: 400;
    

    @media (min-width:1200px){
        margin-top: 1em;
        font-weight: 300;
    }
`

export const TempTitle = styled.div` 
    font-size: 1.8em;
    font-weight: 400;
    margin-top: 0;
    margin-left: 0.25em;
    @media (min-width: 1200px){
        margin-left: 0;
        font-size: 2.5em;
        font-weight: 300;
    }
    
`

const textStyles = css` 
        display: block;
        margin-bottom: 1em;
        border: none;
        font-weight: 700;
        font-size: 1.2em;
        resize: none;
        border-bottom: 1px solid lightgrey;
        width: 100%;
        outline: none;
        color: ${props => (props.theme === 'light'? 'black': 'white')};
        background: ${props => (props.theme === 'light'? 'white': 'grey')};
`


export const TextEditor = styled.div` 
    color: ${props => (props.theme === 'light'? 'black': 'white')};
    background: ${props => (props.theme === 'light'? 'white': 'grey')};
    border-top-left-radius: 30px 30px;
    border-bottom-right-radius: 30px 30px;
    padding: 1em 1.5em;
    width: 100%;
    top: 15vh;
    left: 1em;
    right: 1em;
    margin: 0 auto;
    width: 90%;
    position: ${props => (props.display_? 'fixed' : 'absolute')};
    z-index: 11;
    display: flex;
    flex-direction: column;
    
    
    @media (min-width:1200px){
        min-height: 400px;
        width: 22.5%;
        top: initial;
        bottom: 10%;
        left: 29.5%;
        right: 0;
        margin:0;
        
    }
`

export const TextEditorTitle = styled.input`
    ${textStyles};
    padding: 0.5em 0em;
`

export const TextEditorBody = styled.textarea`
    ${textStyles};
    font-weight: 500;
    font-size: 1rem;
    min-height: 300px;

    @media (min-width:1200px){
        min-height:400px;

    }
`

export const EditCover = styled.div` 
    background-color: rgba(0,0,0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    
    @media (min-width: 1200px){
        height: 100vh;
    }
`


// ----------- buttons / icons ----------------

export const TrackedTitle = styled.p` 
    font-size: 2em;
    font-style: italic;
    margin: 0;
    margin-top: 0.25em;
    margin-left: 0.5em;

    @media (min-width: 1200px){
        font-size: 3.25em;
        margin-top: 0;
    }
`

const stanButtonStyle = css` 
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

export const CardButton = styled.button`
    ${stanButtonStyle};
    font-size: 0.6rem;
    padding: 0 5px;

    @media (min-width: 1200px){
        font-size: initial;
        padding: 0.5em 1em;
        
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

export const PageNav = styled.div` 
        display: flex;
        font-size: 1.5em;
        margin-left: 14.5em;

        @media (max-width: 1199px){
            display: none;
        }
`
    
export const PageNumbers = styled.span` 
        @media (max-width: 1199px){
            display: none;
        }

        display: initial;
        margin 0 1em;
`
export const IconHolder = styled.div` 
    display: flex;
    background: ${props => (props.theme === 'light'? '#CF8600': '#7F5D87')};
    color: white;
    min-height: 64px;
    border-bottom-right-radius: 30px 30px;
    
    div:last-of-type{

        border-top: none;
        border-right: none;
        border-bottom: none;
        border-bottom-right-radius: 30px 30px;
        @media (min-width: 1200px){
            border-bottom-right-radius: 100%;
        }
    }

    i{
        font-size: 2em;
        
    }

    @media (min-width: 1200px){
        background: none;
        

        i{
            font-size: 1.15em;
            
        }
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
        background:  ${props => (props.theme === 'light'? '#e69500': '#8e6896')};

    }

    @media (min-width: 1200px){
        margin-right: 0.5em;
        border: none;
        border-radius: 100%;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const CompleteIcon = styled.div` 
    ${iconStyle};
    border-top: none;
    border-left: none;
    border-bottom: none;
    border-bottom-left-radius: 0px;
    
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
`

export const EditIcon = styled.div` 
    ${iconStyle};
`

export const RevertIcon = styled.div` 
    ${iconStyle};
    border: none;
    border-right: ${props => (props.theme === 'light'? '4px solsid #a86d00': '4px solid #604666')};

    @media (min-width: 1200px){
        border-right: none;
    }
`



export const AddButton = styled.div`
    ${iconStyle};
    width: initial;
    color: white;
    position: fixed;
    z-index: 10;
    /* left: calc(50% - 25px); */
    left: 0;
    right:0;
    margin: 0 auto;
    bottom: 0.8em;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;

    @media (min-width: 1200px){
        border-radius: 50%;
        border: none;
        font-size: 1em;
        position: absolute;
        left: initial;
        bottom: 33%;
        right: 1.5em;
    }


`

export const TimeTitle = styled.h2` 
    font-size: 2em;
    margin-top: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    position: relative; 
   
    @media (min-width:1200px){
        margin-top: 0;
        font-size: 8em;
        font-weight: 100;
        margin-bottom: 0.5em;
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

const arrowStyles = css` 
    height: 50px;
    color: white;
    transition: all 0.15s ease;
    cursor: pointer;
    font-size: 2em;
    @media (min-width: 1200px){
       font-size: 1em;
    }
`

const nextStyle = css` 
    ${arrowStyles};
    
    &:hover{
        color:  #dbdbdb;
        font-size: ${props => (props.scaling? '3em' : '2em')};
    }
    

    @media (min-width: 1200px){
        &:hover{
        color:  #dbdbdb;
        font-size: ${props => (props.scaling? '1em' : '1em')};
    }
`

export const NextSmall = styled.div`
    ${nextStyle};
    border: 1px solid red;
    @media (min-width: 1200px){
        display: none;
    }
`

export const NextLarge = styled.div`
    ${nextStyle};
    @media (max-width: 1199px){
        display: none;
    }
`

const LastStyle = css`
    ${arrowStyles};
    
    
    &:hover{
        font-size: ${props => (props.scaling? '3em' : '2em')};
        color:  #dbdbdb;
    };

    @media (min-width: 1200px){
        &:hover{
            color:  #dbdbdb;
            font-size: ${props => (props.scaling? '1em' : '1em')};       
        }

        
    };
`

export const LastSmall = styled.div` 
   ${LastStyle};
   @media (min-width: 1200px){
       display: none;
   }
`

export const LastLarge = styled.div` 
   ${LastStyle};
   @media (max-width: 1199px){
       display: none;
   }
`
export const Diamond = styled.div`
    border: ${props => (props.theme === 'light'? '2px solid black' : '2px solid lightgrey')};
    min-width: 18px;
    min-height: 18px;
    transform: rotateZ(45deg);
    cursor: pointer;
    background-color: ${props => (props.activated? 'yellow' : 'initial')};

    @media (min-width: 1200px){
        border: ${props => (props.theme === 'light'? '2px solid black' : '2px solid lightgrey')};
        min-width: 25px;
        min-height: 25px;
        margin-right: 1.5em;
        transform: rotateZ(45deg);
        cursor: pointer;
        background-color: ${props => (props.activated? 'yellow' : 'initial')};
    }
`

