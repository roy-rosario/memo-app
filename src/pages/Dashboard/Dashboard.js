import React, {useState, useEffect, useContext, useCallback} from 'react'
import {
        QueryContainer, 
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
        SubContainer,
        MiddleContainer,
        StatusContainer,
        TaskWindow,
        TaskHeader,
        IconHolder,
        DeleteIcon,
        CompleteIcon,
        ArchiveIcon,
        TimeTitle,
        WeatherHolder,
        InfoContainer,
        GreaterContainer,
        WeatherCombo,
        TempTitle,
        TaskEntrySub,
        Last, 
        Next,
        Diamond,
        PageNav,
        PageNumbers,
        EditIcon,
        EditCover,
        AddButton,
        TrackedTitle
    } 
from './styles/dashboardStyles' 
import StatusBar from './components/StatusBar'
import WeatherIcon from './components/WeatherIcon'
import {getAuth} from 'firebase/auth'
import {useHistory} from 'react-router-dom'
import {addDoc, retrieveDocs, removeDoc, editDoc} from '../../services/dataServices'
import {ThemeContext} from '../../utils/themeContext'
import axios from 'axios'
import { EditContext } from '../../utils/editContext'
import { async } from '@firebase/util'


function LogIn(){
    const [task, setTask] = useState('')
    const [taskTitle, setTaskTitle] = useState('')
    const [tasks, setTasks] = useState('')
    const [currentId, setCurrentId] = useState('')
    const [time, setTime] = useState('')
    const [temp, setTemp] = useState('')
    const [tracked, setTracked] = useState("")
    const [trackedMessage, setTrackedMessage] = useState(tasks)
    const [initialAdd, setInitialAdd] = useState(false)
    const [currentCard, setCurrentCard] = useState(0)
    const [cardFlip, setCardFlip] = useState(false)
    const [contentVisible , setContentVisible] = useState(true)
    const [weather, setWeather] = useState('')
    const [timeSwitch, setTimeSwitch] = useState(false)
    const [themeLock, setThemeLock] = useState(false)
    const [big, setBig] = useState(false)
    const [diamondActive, setdiamondActive] = useState(null)
    const [pageNumber, setPageNumber] = useState(0)
    const auth = getAuth()
    const user = auth.currentUser
    const history = useHistory()
    const {theme, toggleLightTheme, toggleDarkTheme} = useContext(ThemeContext)
    const {editMode, toggleEditMode} = useContext(EditContext)
    let index = 0
    const matchResult = window.matchMedia("(max-width: 1199px)").matches;
    const itemsPerPage = 4
    let itemsVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(tasks.length / itemsPerPage)

    
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push('/')
        }
        getWeather()
        
    },[])



    useEffect(() =>{
        if(pageNumber > pageCount){
            setPageNumber(0)
        }
    },[pageCount])

    useEffect(()=>{
        fetchTasks()
        initialTracking()
    }, [user, tasks])

    useEffect(()=>{
        getTime()
        // getWeather() disabled because the weather API only allows few request, so only fetch data on initial render
        reTrigger()
        
    }, [timeSwitch])

 
    const initialTracking = () =>{
        for(let i = 0; i < tasks.length ; i++){
            if(tasks[i].tracked){
                setTrackedMessage(tasks[i].task)
                setTracked(tasks[i].docId)
            }
        }
    }

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
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=10457&appid=e7d9245955d672e33a8a8b8a439db265&units=imperial`)
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
            toggleEditMode()
            setInitialAdd(false)
        }
    },[task, user])
    
   
    const editTask = useCallback(async() =>{
        const check = await editDoc(currentId, {task: taskTitle})

        if(check){
            fetchTasks()
            toggleEditMode()
        }
    },[taskTitle, user])

    const fetchTasks = useCallback(async() =>{
        if(user && user.uid){
            const whatever = await retrieveDocs(user.uid)
    
            setTasks(whatever)
        //     if(pageNumber >= pageCount){
        //     setPageNumber(0)
        // }
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

    const diamondSelect = (id) =>{
        
        if(diamondActive !== id){
            setdiamondActive(id)
        }
        else{
            setdiamondActive(null)
        }
    }


    const flipNext = () =>{
            setCardFlip(true)
            setContentVisible(false)
            
            setTimeout(()=>{
                setCardFlip(false)
            }, 200)

            setTimeout(()=>{
                setContentVisible(true)
            }, 400)

            if(currentCard < tasks.length - 1){
                setCurrentCard(prev => prev+1)
            }
            else{
                setCurrentCard(0)
            }
            
            
            index++
           

        }

        const flipLast = () =>{
            setCardFlip(true)
            setContentVisible(false)
            
            setTimeout(()=>{
                setCardFlip(false)
            }, 100)

            setTimeout(()=>{
                setContentVisible(true)
            }, 500)

            if(currentCard > 0){
                setCurrentCard(prev => prev-1)
            }
            else{
                setCurrentCard(tasks.length-1)
            }
            
            
            index--
           

        }

        

        const pageNext = () =>{
            if(pageNumber < pageCount-1){
                setPageNumber(pageNumber+1)
                
            }
            else{
                return null
            }
        }

        const pagePrevious = () =>{
            if(pageNumber > 0){
                setPageNumber(pageNumber-1)
            }
        }

        const edit = (entry) =>{
            setCurrentId(entry.docId)
            toggleEditMode()
            setTaskTitle(entry.task)
        }

        const cancel = () =>{
            setInitialAdd(false)
            toggleEditMode()
        }


        const trackDoc = async(entry) =>{
            
            
            if(entry.tracked){
                let check = await editDoc(entry.docId, {tracked: !entry.tracked})

                if(check){
                    fetchTasks()
                    setTrackedMessage('')
                    setTracked('')
                }
            }
            else if(tracked.length < 1){
                let check = await editDoc(entry.docId, {tracked: !entry.tracked})

                if(check){
                    fetchTasks()
                    setTrackedMessage(entry.task)
                    setTracked(entry.docId)
                }
            }         
            
        }

    
    return(
        <>
       {editMode && <EditCover/>}
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
    
            {matchResult? 
            
                <InfoContainer theme={theme}>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                        {time && <TimeTitle>{time}</TimeTitle>}
                        
                        <WeatherHolder theme={theme}>
                            {/* <i  className="far fa-sun"></i> */}
                            <WeatherCombo>
                                <WeatherIcon condition={weather}/>
                                <h2>{weather}</h2>
                            </WeatherCombo>
                            {temp && <TempTitle><h2>{temp}°</h2></TempTitle>}
                        </WeatherHolder>

                    </div>
                
                    {tracked && <><p style={{marginLeft: '1em', marginTop: '0'}}>tracked: </p> <TrackedTitle p style={{marginLeft: '0.5em'}}>"{trackedMessage}"</TrackedTitle></>}
                 </InfoContainer>
            
            :

                <InfoContainer theme={theme}>
                   
                    {time && <TimeTitle>{time}</TimeTitle>}
                
                    {tracked && <><p style={{marginLeft: '0.75em', marginTop: '0', marginBottom: '0', fontSize: '1.5em'}}>tracked: </p> <TrackedTitle>"{trackedMessage}"</TrackedTitle></>}

                    <WeatherHolder theme={theme}>
                        {/* <i  className="far fa-sun"></i> */}
                        <WeatherCombo>
                            <WeatherIcon condition={weather}/>
                            <h2>{weather}</h2>
                        </WeatherCombo>
                        {temp && <TempTitle><h2>{temp}°</h2></TempTitle>}
                    </WeatherHolder>

                </InfoContainer>

            }

            <SubContainer theme={theme}>

                <MiddleContainer>

                    <StatusBar 
                        theme={theme} 
                        tasks={tasks} 
                        mode_={editMode} 
                        info={initialAdd? task : taskTitle} 
                        change={initialAdd? setTask : setTaskTitle}
                        cancel_={cancel}
                        write_back = {initialAdd? addTask : editTask}
                    />

                    <QueryContainer theme={theme}>

                        <label><h4>Add a Task</h4></label>
                        <AddButton 
                            onClick={()=>{
                                setInitialAdd(true)
                                toggleEditMode()
                            }}
                            theme={theme}
                        >
                            <i class="fas fa-plus"></i>
                        </AddButton>
                        {/* <input
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
                        </StanButton> */}

                    </QueryContainer>


                </MiddleContainer>

                <TaskContainer theme={theme}>
                        <h2>Tasks</h2>
                   
                            <TaskWindow theme={theme}>
                                {matchResult && tasks.length > 0 && 
                                <Last 
                                    theme={theme} 
                                    onClick={flipLast} 
                                    disabled={currentCard === 0}
                                    onMouseDown={()=>{setBig(true)}} 
                                    onMouseUp={()=>{setBig(false)}}
                                    scaling={big}
                                >
                                    <i class="fas fa-chevron-left"></i>
                                </Last>}
                                {(!matchResult && tasks.length > 0) &&
                                    tasks.slice(itemsVisited, itemsVisited + itemsPerPage)
                                    .map(entry => {
                                        return(
                                            <TaskEntry theme={theme} key={entry.docId} depth={index} flip={cardFlip}>
                                                <Diamond 
                                                theme={theme} 
                                                onClick={()=>{
                                                    trackDoc(entry)
                                                }}
                                                activated={entry.tracked}  
                                                />
                                                <TaskEntrySub theme={theme} >                                               
                                                        
                                                        <div style={{width: '100%'}}>
                                                            <p>{contentVisible  && 'task'}</p>
                                                            <h2 style={{marginBottom: "0"}}>{contentVisible  && (entry.task.length > 19? entry.task.slice(0,20).trim()+"..." : entry.task)} </h2>
                                                            <h3 style={{fontSize: "0.8rem"}}> {contentVisible  && 'Created: '+ entry.dateCreated}</h3>
                                                        </div>
                                                        <IconHolder>
                                                            <CompleteIcon theme={theme}>
                                                                {contentVisible && <i className="fas fa-check"></i>}
                                                            </CompleteIcon>
                                                            <DeleteIcon
                                                                theme={theme}
                                                                onClick={()=>{
                                                                    deleteTask(entry.docId)
                                                                }}
                                                            >
                                                                {contentVisible && <i className="far fa-trash-alt"></i>}
                                                            </DeleteIcon>
                                                            <ArchiveIcon theme={theme}>
                                                                {contentVisible && <i className="fas fa-book"></i>}
                                                            </ArchiveIcon>
                                                            <EditIcon onClick={() =>{edit(entry)}} theme={theme}>
                                                                {contentVisible && <i className="fas fa-pen"></i>}
                                                            </EditIcon>
                                                        </IconHolder>
                                                </TaskEntrySub>
                                
                                         </TaskEntry>
                                        )
                                    }) 
                                   
                                }    
                                {tasks.length > 0? tasks.map(entry => {
                                        
                                  if(matchResult){

                                      if(entry === tasks[currentCard]){
                                         return(
                                             <TaskEntry theme={theme} key={entry.docId} depth={index} flip={cardFlip}>
                                                     
                                             <TaskEntrySub theme={theme} >                                               
                                                      {contentVisible  && <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}><p>task</p> <Diamond 
                                                theme={theme} 
                                                onClick={()=>{
                                                    trackDoc(entry)
                                                }}
                                                activated={entry.tracked}  
                                                /></div>}
                                                      <h2 style={{marginBottom: "0"}}>{contentVisible  && entry.task.slice(0,25).trim()+"..."} </h2>
                                                      <h3 style={{fontSize: "0.8rem"}}> {contentVisible  && 'Created: '+ entry.dateCreated}</h3>
                                             </TaskEntrySub>
                                             <IconHolder>
                                                 <CompleteIcon theme={theme}>
                                                             {contentVisible && <i className="fas fa-check"></i>}
                                                 </CompleteIcon>
                                                  <DeleteIcon
                                                       theme={theme}
                                                       onClick={()=>{
                                                            if(currentCard === tasks.length -1){
                                                                    setCurrentCard(0)
                                                                    deleteTask(entry.docId)
                                                                }
                                                                else{
                                                                    deleteTask(entry.docId)
                                                                }
                                                            }
                                                        }
                                                  >
                                                      {contentVisible && <i className="far fa-trash-alt"></i>}
                                                   </DeleteIcon>
                                                   <ArchiveIcon theme={theme}>
                                                                {contentVisible && <i className="fas fa-book"></i>}
                                                    </ArchiveIcon>
                                                    <EditIcon onClick={() =>{edit(entry)}} theme={theme}>
                                                        {contentVisible && <i className="fas fa-pen"></i>}
                                                    </EditIcon>
                                             </IconHolder>
                                          </TaskEntry>
                                          )
                                        }
                                        
                                    }
                                                                    
                                        
                                } ) : <p>There are no tasks to display</p>}
                                {matchResult && tasks.length > 0 && <Next 
                                    theme={theme} 
                                    onClick={flipNext} 
                                    disabled={currentCard === tasks.length-1}
                                    onMouseDown={()=>{setBig(true)}} 
                                    onMouseUp={()=>{setBig(false)}}
                                    scaling={big}
                                >
                                    <i class="fas fa-chevron-right"></i> 
                                </Next>}
                            </TaskWindow>
                        
                        {   !matchResult && tasks.length > 0 &&
                            <PageNav>
                                <Last 
                                    theme={theme} 
                                    onClick={pagePrevious} 
                                    disabled={currentCard === 0}
                                    onMouseDown={()=>{setBig(true)}} 
                                    onMouseUp={()=>{setBig(false)}}
                                    scaling={big}
                                >
                                    <i class="fas fa-chevron-left"></i> 
                                </Last>
                                
                                <PageNumbers>{pageNumber+1} / {pageCount}</PageNumbers>
                                <Next 
                                    theme={theme} 
                                    onClick={pageNext} 
                                    disabled={currentCard === tasks.length-1}
                                    onMouseDown={()=>{setBig(true)}} 
                                    onMouseUp={()=>{setBig(false)}}
                                    scaling={big}
                                >
                                    <i class="fas fa-chevron-right"></i> 
                                </Next>                                
                            </PageNav>

                        }

                </TaskContainer>


            </SubContainer>
        </GreaterContainer>
    </>
    )
}

export default LogIn