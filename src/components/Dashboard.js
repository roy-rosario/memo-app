import React, {useState, useEffect} from 'react'
import {MainContainer} from '../styles/allStyles' 
import {getAuth} from 'firebase/auth'
import {useHistory} from 'react-router-dom'
import {getDB} from '../utils/firebase-config'
import {setDoc, doc, collection, getDocs, query, where, deleteDoc} from 'firebase/firestore'

function LogIn(){
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState('')
    const auth = getAuth()
    const user = auth.currentUser
    const db = getDB()
    const history = useHistory()

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push('/')
        }
    },[])

    const addTask = () =>{
        const docRef = doc(collection(db, 'tasks'))

        setDoc(docRef, {task: task, userId:user.uid})
        .then(() => { setTask("")})
        .catch(err => alert(err.message))
    }
    

    const onLogOut = () =>{
       localStorage.removeItem('token')
       history.push('/')
    }

    return(
        <MainContainer>
            <h1>Welcome {user && user.displayName}</h1>

            <label>Add a Task</label>
            <input
                value={task}
                type = 'text'
                onChange = {(e => setTask(e.target.value))}
            />

            <button onClick={addTask} >Submit a Task</button>



            <button onClick={onLogOut}>Log Out</button>
        </MainContainer>
    
    )
}

export default LogIn