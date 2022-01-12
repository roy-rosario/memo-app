
import {StatusContainer} from '../styles/dashboardStyles'

export default function StatusBar({data}){
   
    
    return(
            <StatusContainer theme={data.theme}>
                
                    
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



