import React, { useState } from 'react'
import {StatusContainer, TextEditor, StanButton, EditCover, TextEditorTitle, TextEditorBody} from '../styles/dashboardStyles'
import { archiveDoc } from '../../../services/dataServices'

export default function StatusBar({data}){
    const [body, setBody] = useState('')
    // const [body, setBody] = useState('')

    return(
            <StatusContainer theme={data.theme}>
                
                    {data.editMode && 
                    
                    <TextEditor theme={data.theme}>
                        <TextEditorTitle theme={data.theme} value={data.task} maxLength="50" onChange={e => (data.setTask(e.target.value))}/>
                        <TextEditorBody theme={data.theme} value={body} maxLength="250" onChange={e => (setBody(e.target.value))}/>
                        <div>
                            <StanButton theme={data.theme} onClick={()=>{data.addTask(body, setBody)}}>save</StanButton>
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

