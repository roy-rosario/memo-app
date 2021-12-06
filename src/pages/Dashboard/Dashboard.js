import React, {useState, useEffect, useContext, useCallback} from 'react'
import {QueryContainer, 
        StanButton, 
        TaskEntry,
        NavBar,
        AccountDrop,
        NavAccountName,
        ThemeSelect,
        ThemeHolder,
        ThemeOptionLight,
        ThemeOptionDark,
        TaskContainer,
        MainContainer,
        MiddleContainer,
        StatusContainer,
        TaskWindow,
        taskHeader,
        IconHolder,
        DeleteIcon,
        CompleteIcon,
        ArchiveIcon,
        TimeTitle,
        WeatherHolder,
        InfoContainer,
        GreaterContainer
    } from './styles/dashboardStyles' 
import StatusBar from './components/StatusBar'
import WeatherIcon from './components/WeatherIcon'
import {getAuth} from 'firebase/auth'
import {useHistory} from 'react-router-dom'
import {addDoc, retrieveDocs, removeDoc} from '../../services/dataServices'
import {ThemeContext} from '../../utils/themeContext'
import axios from 'axios'


function LogIn(){
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState('')
    const [time, setTime] = useState('')
    const [temp, setTemp] = useState('')
    const [weather, setWeather] = useState('')
    const [timeSwitch, setTimeSwitch] = useState('false')
    const [themeLock, setThemeLock] = useState(false)
    const auth = getAuth()
    const user = auth.currentUser
    const history = useHistory()
    const {theme, toggleLightTheme, toggleDarkTheme} = useContext(ThemeContext)

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push('/')
        }
        getWeather()
    },[])

    useEffect(()=>{
        fetchTasks()
        
    }, [user])

    useEffect(()=>{
        getTime()
        // getWeather() disabled because the weather API only allows few request, so only fetch data on initial render
        reTrigger()
    }, [timeSwitch])

    async function getTime(){
        await axios.get('http://worldtimeapi.org/api/timezone/America/New_York')
        .then(res => {
                if(res.data){
                setTime(res.data.datetime.slice(11, 16))}
            }
        )
        .catch(err => console.log(err))
    }


    async function getWeather(){
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=53140&appid=e7d9245955d672e33a8a8b8a439db265&units=imperial`)
        .then(res => {
            if(res.data){
                setTemp(res.data.main.temp.toString().slice(0,2))
                setWeather(res.data.weather[0].main.toLowerCase())
            }
        })
        .catch(err => console.log(err) )
    }

    const reTrigger = ()=>{
        setTimeout(()=> {
            setTimeSwitch(prev => !prev)
        }, 1000)
    }

    const addTask = useCallback(async() =>{
        const check = await addDoc(task, user.uid)

        if(check){
            setTask('')
            fetchTasks()
        }
    },[task, user])
    
   
    

    const fetchTasks = useCallback(async() =>{
        if(user && user.uid){
            const whatever = await retrieveDocs(user.uid)
    
            setTasks(whatever)
        }
    }, [user])
    
    

    const deleteTask = async(id) =>{
        const res = await removeDoc(id)
        
        if(res){
            fetchTasks()
        }
      
    }
    

    const onLogOut = () =>{
       localStorage.removeItem('token')
       history.push('/')
    }

    const toggleThemeSelector = () =>{
        setThemeLock(prev => !prev)
    }

    
    return(
        <>
        <NavBar theme={theme}>
            <h2>memo-app</h2>

            <div>
                <NavAccountName theme={theme}>{user && user.displayName}</NavAccountName>
                <AccountDrop theme={theme}>
                    <ThemeSelect onClick = {toggleThemeSelector}>
                        Theme
                    </ThemeSelect>
                    <p style={{cursor: "pointer"}} onClick={onLogOut}>Log Out</p>
                    <ThemeHolder activate={themeLock}>
                            <ThemeOptionLight 
                                theme={theme}
                                onClick={toggleLightTheme}
                            >
                                light theme
                            </ThemeOptionLight>
                            <ThemeOptionDark 
                                theme={theme}
                                onClick={toggleDarkTheme}
                            >dark theme
                            </ThemeOptionDark>
                    </ThemeHolder>
                </AccountDrop>
                
            </div>
        </NavBar>

        <GreaterContainer>

            <InfoContainer theme={theme}>
                {time && <TimeTitle>{time}</TimeTitle>}
                
                <WeatherHolder theme={theme}>
                    {/* <i  class="far fa-sun"></i> */}
                    <WeatherIcon condition={weather}/>
                    <h2>{weather}</h2>
                    {temp && <h2>{temp}°</h2>}
                </WeatherHolder>
            
            </InfoContainer>

            <MainContainer theme={theme}>

            

            <MiddleContainer>

                <StatusBar theme={theme} tasks={tasks}/>

                <QueryContainer theme={theme}>

                    <label><h4>Add a Task</h4></label>
                    <input
                        value={task}
                        type="text"
                        maxLength="50"
                        onChange = {(e => setTask(e.target.value))}
                    />

                    

                    <StanButton 
                        theme={theme}
                        onClick={addTask} 
                        disabled = {task === ""}
                    >
                        Submit a Task
                    </StanButton>

                </QueryContainer>


            </MiddleContainer>

            <TaskContainer theme={theme}>
                <taskHeader>
                    <h2>Tasks</h2>
                </taskHeader>
                
                        <TaskWindow theme={theme}>
                            {tasks.length > 0? tasks.map(entry => {
                                return(
                                    <TaskEntry key={entry.docId}>
                                        <div>
                            
                                            <p style={{marginBottom: "0"}}>{entry.task} </p>
                                            <p style={{fontSize: "0.8rem"}}>Created: {entry.dateCreated}</p>
                                        </div>
                                        <IconHolder>
                                            <CompleteIcon>
                                                <i class="fas fa-check"></i>
                                            </CompleteIcon>
                                            <DeleteIcon
                                                theme={theme}
                                                onClick={()=>{deleteTask(entry.docId)}}
                                            >
                                                <i class="far fa-trash-alt"></i>
                                            </DeleteIcon>
                                            <ArchiveIcon theme={theme}>
                                                <i class="fas fa-book"></i>
                                            </ArchiveIcon>
                                        </IconHolder>
                                    </TaskEntry>
                                )
                            }) : <p>There are no tasks to display</p>}
                        </TaskWindow>
               
            </TaskContainer>

            </MainContainer>
        </GreaterContainer>
    </>
    )
}

export default LogIn