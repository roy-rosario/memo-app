import React, {useState, useEffect, useContext, useCallback} from 'react'
import {MainContainer, 
        StanButton, 
        TaskEntry,
        NavBar,
        AccountDrop,
        NavTitle,
        ThemeSelect,
        ThemeHolder,
        ThemeOption
    } from './styles/dashboardStyles' 
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
    const {theme, toggleTheme} = useContext(ThemeContext)

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
                            <ThemeOption 
                                onClick={
                                    toggleTheme
                                }
                            >
                                <p>light theme</p></ThemeOption>
                            <ThemeOption onClick={toggleTheme}><p>dark theme</p></ThemeOption>
                    </ThemeHolder>
                </AccountDrop>
                
            </div>
        </NavBar>

        <MainContainer theme={theme}>


            <label>Add a Task</label>
            <input
                value={task}

                onChange = {(e => setTask(e.target.value))}
            />

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

            <StanButton 
                theme={theme}
                onClick={addTask} 
                disabled = {task === ""}
            >
                Submit a Task
            </StanButton>



        </MainContainer>
    </>
    )
}

export default LogIn