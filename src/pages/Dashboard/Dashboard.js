import React, {useState, useEffect, useContext, useCallback} from 'react'
import {QueryContainer, 
        StanButton, 
        TaskEntry,
        NavBar,
        AccountDrop,
        NavTitle,
        ThemeSelect,
        ThemeHolder,
        ThemeOptionLight,
        ThemeOptionDark,
        TaskContainer,
        MainContainer,
        LeftContainer,
        StatusContainer,
        TaskWindow,
        taskHeader
    } from './styles/dashboardStyles' 
import StatusBar from './components/StatusBar'
import {getAuth} from 'firebase/auth'
import {useHistory} from 'react-router-dom'
import {addDoc, retrieveDocs, removeDoc} from '../../services/dataServices'
import {ThemeContext} from '../../utils/themeContext'



function LogIn(){
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState('')
    const [themeLock, setThemeLock] = useState(false)
    const auth = getAuth()
    const user = auth.currentUser
    const history = useHistory()
    const {theme, toggleLightTheme, toggleDarkTheme} = useContext(ThemeContext)

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push('/')
        }
    },[])

    useEffect(()=>{
        fetchTasks()
    }, [user])

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
            <h3>memo-app</h3>

            <div>
                <NavTitle>{user && user.displayName}</NavTitle>
                <AccountDrop>
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

        <MainContainer>

        <LeftContainer>

            <StatusBar theme={theme} tasks={tasks}/>

            <QueryContainer theme={theme}>

                <label>Add a Task</label>
                <input
                    value={task}

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


        </LeftContainer>

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
                            <StanButton
                                theme={theme}
                                onClick={()=>{deleteTask(entry.docId)}}
                            >
                                delete
                            </StanButton>
                        </TaskEntry>
                    )
                }) : <p>There are no tasks to display</p>}
            </TaskWindow>
        </TaskContainer>

        </MainContainer>
    </>
    )
}

export default LogIn