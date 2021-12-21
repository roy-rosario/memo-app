import React from 'react'
import {StatusContainer, TextEditor, StanButton, EditCover} from '../styles/dashboardStyles'
import { archiveDoc } from '../../../services/dataServices'

export default function StatusBar({theme, tasks, change, info, mode_, write_back, cancel_}){
    return(
            <StatusContainer theme={theme}>
                
                    {mode_ && <TextEditor theme={theme}>
                        <textarea value={info} maxLength="50" onChange={e => (change(e.target.value))}/>
                        <div>
                            <StanButton theme={theme} onClick={write_back}>save</StanButton>
                            <StanButton theme={theme} onClick={()=>{cancel_(false)}}>cancel</StanButton>
                        </div>
                    </TextEditor>
                    }
                <>
                    <h3>Status</h3>
                    <h4>Total Tasks: </h4>
                    <span>
                    {tasks.length}
                    </span>
                </>
                
            </StatusContainer>
    )
}

