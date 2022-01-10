import React, {useState, useEffect, useContext, useCallback} from 'react'
import {
        QueryContainer, 
        NavBar,
        AccountDrop,
        NavAccountName,
        ThemeSelect,
        ThemeHolder,
        ThemeOptionLight,
        ThemeOptionDark,
        SubContainer,
        MiddleContainer,
        TimeTitle,
        WeatherHolder,
        InfoContainer,
        GreaterContainer,
        WeatherCombo,
        TempTitle,
        EditCover,
        AddButton,
        TrackedTitle,
        InfoHeader,
        WeatherTitle
    } 
from './styles/dashboardStyles' 
import StatusBar from './components/StatusBar'
import WeatherIcon from './components/WeatherIcon'
import {getAuth} from 'firebase/auth'
import {useHistory} from 'react-router-dom'
import {addDoc, retrieveDocs, removeDoc, editDoc, completeDoc, revertDoc, archiveDoc} from '../../services/dataServices'
import {ThemeContext} from '../../utils/themeContext'
import axios from 'axios'
import { EditContext } from '../../utils/editContext'
import { EntryBodyContext} from '../../utils/entryBodyContext'
import TaskComponent from './components/TaskComponent'
import TextEditorComponent from './components/TextEditorComponent'


function LogIn(){
    const [task, setTask] = useState('')
    const [taskTitle, setTaskTitle] = useState('')
    const [tasks, setTasks] = useState('')
    const [currentId, setCurrentId] = useState('')
    const [collection, setCollection] = useState('tasks')
    const [time, setTime] = useState('')
    const [temp, setTemp] = useState('')
    const [trackedId, setTrackedId] = useState("")
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
    const {entryBody, setEntryBody} = useContext(EntryBodyContext)
    let index = 0
    const matchResult = window.matchMedia("(max-width: 1199px)").matches;
    const itemsPerPage = 4
    let itemsVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(tasks.length / itemsPerPage)
    let today = new Date();
    let timeStamp = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes()

    const toggleTaskTypes = (collectionName) =>{
        setCollection(collectionName)
        fetchTasks(collectionName)
        if(matchResult){
            setCurrentCard(0)
        }
    }
    
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push('/')
        }
        getWeather()
        
        
    },[])

    useEffect(()=>{
        if( pageNumber+1 > pageCount){

            if(pageNumber >= 1){
                setPageNumber(pageNumber-1)
            }
            else{
                setPageNumber(0)
            }
        }
    }, [pageNumber, pageCount])


    useEffect(()=>{
        fetchTasks("tasks")
    }, [user])

    useEffect(()=>{
        initialTracking()
    }, [tasks])


    // tasks was tracked here previously, removed to test

    // useEffect(()=>{
    //     getTime()
    //     getWeather() disabled because the weather API only allows few request, so only fetch data on initial render
    //     reTrigger()
        
    // }, [timeSwitch])

 
    const initialTracking = () =>{
        for(let i = 0; i < tasks.length ; i++){
            if(tasks[i].tracked){
                setTrackedMessage(tasks[i].task)
                setTrackedId(tasks[i].docId)
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

    // const reTrigger = ()=>{
    //     setTimeout(()=> {
    //         setTimeSwitch(prev => !prev)
            
    //     }, 1000)
    // }

    const addTask = useCallback(async(body, setBody) =>{
        
        const check = await addDoc(task, body, user.uid)

        if(check){
            setTask('')
            setBody("")
            fetchTasks(collection)
            toggleEditMode()
            setInitialAdd(false)
        }
    },[task, user])
    
    
    
    const editTask = useCallback(async(info) =>{
        const check = await editDoc(currentId, {task: taskTitle, taskBody: info})

        if(check){
            toggleEditMode()
            fetchTasks(collection)
        }
    },[taskTitle, user])

    const fetchTasks = useCallback(async(collection_name) =>{
        if(user && user.uid){
            const whatever = await retrieveDocs(user.uid, collection_name)
    
            if(whatever){
                setTasks(whatever)
            }
            
            // if(pageNumber > pageCount){
            //     setPageNumber(0)
            // }
        }
    }, [user])
    
    

    const deleteTask = async(id, collection_name) =>{
        const res = await removeDoc(id, collection_name)
        
        if(res){
            fetchTasks(collection)
            setTrackedId('')
            setTrackedMessage('')
        }

    }

    const completeTask = async(entry) =>{
        const res = await completeDoc({...entry, tracked: false})

        if(res){
            setCurrentCard(0)
            deleteTask(entry.docId, 'tasks')
            setTrackedId('')
            setTrackedMessage('')
        }
    } 

    const revertTask = async(entry) =>{
        const res = await revertDoc({...entry, tracked: false})

        if(res){
            setCurrentCard(0)
            deleteTask(entry.docId, 'completed')
        }
    } 

    const archiveTask = async(entry) =>{
        const res = await archiveDoc({...entry, tracked: false})

        if(res){
            setCurrentCard(0)
            deleteTask(entry.docId, 'tasks')
            setTrackedId('')
            setTrackedMessage('')
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

        // const edit = (entry) =>{
        //     setCurrentId(entry.docId)
        //     console.log(currentId)
        //     toggleEditMode()
        //     setTaskTitle(entry.task)
        //     setEntryBody(entry.taskBody)
        // }

        const cancel = () =>{
            setInitialAdd(false)
            toggleEditMode()
        }


        const trackDoc = async(entry) =>{
            
            
            if(entry.tracked){
                let check = await editDoc(entry.docId, {tracked: !entry.tracked})

                if(check){
                    setTrackedMessage('')
                    setTrackedId('')
                    fetchTasks(collection)
                }
            }
            else if(!entry.tracked){
                for(let i = 0; i < tasks.length ; i++){
                    if(tasks[i].tracked){
                        // console.log(tasks[i])
                        // setTrackedMessage(tasks[i].task)
                        // setTrackedId(tasks[i].docId)
                        // console.log(trackedMessage, trackedId)
                        let check = await editDoc(tasks[i].docId, {tracked: false})
                        if(check){
                            setTrackedId('')
                            setTrackedMessage('')
                        }
                    }
                }
                let check = await editDoc(entry.docId, {tracked: !entry.tracked})

                if(check){
                    fetchTasks(collection)
                    setTrackedMessage(entry.task)
                    setTrackedId(entry.docId)
                }
            }         
            
        }

        let generalProps ={
            task: task,
            setTask: setTask,
            taskTitle: taskTitle,
            setTaskTitle: setTaskTitle,
            tasks: tasks,
            setTasks: setTask,
            collection: collection,
            setCollection: setCollection,
            toggleTaskTypes: toggleTaskTypes,
            currentId: currentId,
            setCurrentId: setCurrentId,
            time: time,
            setTime: setTime,
            temp: temp,
            setTemp: setTemp,
            trackedId: trackedId,
            setTrackedId: setTrackedId,
            trackedMessage: trackedMessage,
            setTrackedMessage: setTrackedMessage,
            initialAdd: initialAdd,
            setInitialAdd: setInitialAdd,
            currentCard: currentCard,
            setCurrentCard: setCurrentCard,
            cardFlip: cardFlip,
            setCardFlip: setCardFlip,
            contentVisible: contentVisible,
            setContentVisible: setContentVisible,
            weather: weather,
            setWeather: setWeather,
            timeSwitch: timeSwitch,
            setTimeSwitch: setTimeSwitch,
            themeLock: themeLock,
            setThemeLock: setThemeLock,
            big: big,
            setBig: setBig,
            diamondActive: diamondActive,
            setdiamondActive: setdiamondActive,
            setPageNumber: setPageNumber,
            trackDoc: trackDoc,
            pageNext: pageNext,
            pagePrevious: pagePrevious,
            addTask: addTask,
            revertTask: revertTask,
            initialTracking: initialTracking,
            fetchTasks: fetchTasks,
            editTask: editTask,
            completeTask: completeTask,
            archiveTask: archiveTask,
            deleteTask: deleteTask,
            // edit: edit,
            flipLast: flipLast,
            flipNext: flipNext,
            cancel: cancel,
            theme: theme,
            toggleLightTheme: toggleLightTheme,
            toggleDarkTheme: toggleDarkTheme,
            toggleEditMode: toggleEditMode,
            toggleThemeSelector: toggleThemeSelector,
            auth: auth,
            matchResult: matchResult,
            user: user,
            history: history,
            editMode: editMode,
            index : index,
            itemsPerPage : itemsPerPage,
            itemsVisited : itemsVisited,
            pageCount : pageCount,
            pageNumber: pageNumber,
        }
    
    return(
        <>
       {editMode && <EditCover/>}
       {editMode && <TextEditorComponent data={generalProps}/>}
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

                    <InfoHeader>

                        {/* {time && <TimeTitle>{time}</TimeTitle>} */}
                        <TimeTitle>{timeStamp}</TimeTitle>
                        
                        <WeatherHolder theme={theme}>
                            {/* <i  className="far fa-sun"></i> */}
                            <WeatherCombo>
                                <WeatherIcon condition={weather}/>
                                <h2>{weather}</h2>
                            </WeatherCombo>
                            {temp && <TempTitle>{temp}°</TempTitle>}
                        </WeatherHolder>

                    </InfoHeader>
                
                    {trackedId && <><p style={{marginLeft: '1em', marginTop: '0'}}>tracked: </p> <TrackedTitle p style={{marginLeft: '0.5em'}}>{trackedMessage}</TrackedTitle></>}
                 </InfoContainer>
            
            :

                <InfoContainer theme={theme}>
                   
                   <TimeTitle>{timeStamp}</TimeTitle>
                
                    {trackedId && <><p style={{marginLeft: '0.75em', marginTop: '0', marginBottom: '0', fontSize: '1.5em'}}>tracked: </p> <TrackedTitle>{trackedMessage}</TrackedTitle></>}

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
                        {
                            !matchResult &&
                            <StatusBar 
                                data={generalProps}
                            />
                        }

                {   !matchResult?
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
                    :
                    <AddButton  
                        display_={matchResult}
                        onClick={()=>{
                            setInitialAdd(true)
                            toggleEditMode()
                        }}
                        theme={theme}
                    >
                        <i class="fas fa-plus"></i>
                    </AddButton>
                    }
                

                </MiddleContainer>

                {/* case switch for all types of task containers - have it follow a state variable */}
                

                    <TaskComponent data={generalProps}/>


            </SubContainer>
        </GreaterContainer>
    </>
    )
}

export default LogIn