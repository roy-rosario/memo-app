import React, { useState, useContext} from 'react'
import {TextEditor, StanButton, TextEditorTitle, TextEditorBody} from '../styles/dashboardStyles'
import {EntryBodyContext} from '../../../utils/entryBodyContext' 

export default  function TextEditorComponent({data}){
    const [body, setBody] = useState('')
    const {entryBody, setEntryBody} = useContext(EntryBodyContext)
    return(
        
            <TextEditor theme={data.theme} display_={data.matchResult}>
                <TextEditorTitle theme={data.theme} value={data.initialAdd? data.task : data.taskTitle} maxLength="50" onChange={e => (data.initialAdd? data.setTask(e.target.value) : data.setTaskTitle(e.target.value))}/>
                <TextEditorBody theme={data.theme} value={data.initialAdd? body : entryBody} maxLength="250" onChange={e => (data.initialAdd? setBody(e.target.value) : setEntryBody(e.target.value))}/>
                <div>
                    <StanButton theme={data.theme} onClick={()=>{data.initialAdd? data.addTask(body, setBody) : data.editTask(entryBody)}}>save</StanButton>
                    <StanButton theme={data.theme} onClick={data.cancel}>cancel</StanButton>
                </div>
            </TextEditor>     
    )
}
