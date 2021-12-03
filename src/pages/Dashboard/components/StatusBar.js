import React from 'react'
import {StatusContainer} from '../styles/dashboardStyles'

export default function StatusBar({theme, tasks}){
    return(
            <StatusContainer theme={theme}>
                <h3>Status</h3>
                <h4>Total Tasks: </h4>
                <span>
                    {tasks.length}
                </span>
            </StatusContainer>
    )
}