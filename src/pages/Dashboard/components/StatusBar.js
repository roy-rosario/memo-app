import React from 'react'
import {StatusContainer, TextEditor} from '../styles/dashboardStyles'
import { archiveDoc } from '../../../services/dataServices'

export default function StatusBar({theme, tasks, change, info, mode_, write_back}){
    return(
            <StatusContainer theme={theme}>
                {mode_?
                <TextEditor>
                    <input value={info} onChange={e => (change(e.target.value))}/>
                    <button onClick={write_back}>submit</button>
                    <button>cancel</button>
                </TextEditor>
                :
                <>
                    <h3>Status</h3>
                    <h4>Total Tasks: </h4>
                    <span>
                    {tasks.length}
                    </span>
                </>
                }
            </StatusContainer>
    )
}

