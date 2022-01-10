import React, { useState, useContext} from 'react'
import {StatusContainer, TextEditor, StanButton, EditCover, TextEditorTitle, TextEditorBody, TaskEntry} from '../styles/dashboardStyles'
import { archiveDoc } from '../../../services/dataServices'
import {EntryBodyContext} from '../../../utils/entryBodyContext' 


export default function StatusBar({data}){
    const [body, setBody] = useState('')
    const {entryBody, setEntryBody} = useContext(EntryBodyContext)
    
    
    return(
            <StatusContainer theme={data.theme}>
                
                    {data.editMode && 
                    
                    <TextEditor theme={data.theme} display_={data.matchResult}>
                        <TextEditorTitle theme={data.theme} value={data.initialAdd? data.task : data.taskTitle} maxLength="50" onChange={e => (data.initialAdd? data.setTask(e.target.value) : data.setTaskTitle(e.target.value))}/>
                        <TextEditorBody theme={data.theme} value={data.initialAdd? body : entryBody} maxLength="250" onChange={e => (data.initialAdd? setBody(e.target.value) : setEntryBody(e.target.value))}/>
                        <div>
                            <StanButton theme={data.theme} onClick={()=>{data.initialAdd? data.addTask(body, setBody) : data.editTask(entryBody)}}>save</StanButton>
                            <StanButton theme={data.theme} onClick={data.cancel}>cancel</StanButton>
                        </div>
                    </TextEditor>
                    }
                <>
                    <h3>Status</h3>
                    <h4>Total Tasks: </h4>
                    <span>
                    {data.tasks.length}
                    </span>
                </>
                
            </StatusContainer>
    )
}


