import { useContext } from 'react'
import { collection } from 'firebase/firestore'
import {

        TaskEntry,
        TaskContainer,
        TaskWindow,
        IconHolder,
        DeleteIcon,
        CompleteIcon,
        ArchiveIcon,
        RevertIcon,
        TaskEntrySub,
        Last, 
        Next,
        Diamond,
        PageNav,
        PageNumbers,
        EditIcon,
        TaskTitle,
        TaskHeader,
        StanButton,
        ListTypeTray,
    } 
from '../styles/dashboardStyles'
import {EntryBodyContext} from '../../../utils/entryBodyContext' 



function TaskComponent({data}){
    const {entryBody, setEntryBody} = useContext(EntryBodyContext)

    const edit = (entry) =>{
        data.setCurrentId(entry.docId)
        data.toggleEditMode()
        data.setTaskTitle(entry.task)
        setEntryBody(entry.taskBody)
    }

    
    return(
                
                <TaskContainer theme={data.theme}>
                        <TaskHeader>
                            <TaskTitle>{data.collection[0].toUpperCase() + data.collection.substring(1)}</TaskTitle> 
                                {!data.matchResult && 
                                    <ListTypeTray>
                                        <StanButton onClick={()=>{data.toggleTaskTypes('tasks')}} theme={data.theme}>current</StanButton>
                                        <StanButton onClick={()=>{data.toggleTaskTypes('completed')}} theme={data.theme}>completed</StanButton>
                                        <StanButton onClick={()=>{data.toggleTaskTypes('archived')}} theme={data.theme}>archived</StanButton>
                                    </ListTypeTray>                                
                                }
                        </TaskHeader>
                   
                            <TaskWindow theme={data.theme}>
                                {data.matchResult && data.tasks.length > 0 && 
                                <Last 
                                    theme={data.theme} 
                                    onClick={data.flipLast} 
                                    disabled={data.currentCard === 0}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-left"></i>
                                </Last>}
                                {(!data.matchResult && data.tasks.length > 0) &&
                                    data.tasks.slice(data.itemsVisited, data.itemsVisited + data.itemsPerPage)
                                    .map(entry => {
                                        return(
                                            <TaskEntry theme={data.theme} key={entry.docId} depth={data.index} flip={data.cardFlip}>
                                                {
                                                    data.collection === 'tasks' && 
                                                    <Diamond 
                                                    theme={data.theme} 
                                                    onClick={()=>{
                                                        data.trackDoc(entry)
                                                    }}
                                                    activated={entry.tracked}  
                                                    />
                                                }
                                                <TaskEntrySub theme={data.theme} >                                               
                                                        
                                                        <div style={{width: '100%'}}>
                                                            <p>{data.contentVisible  && 'task'}</p>
                                                            <h2 style={{marginBottom: "0"}}>{data.contentVisible  && (entry.task.length > 19? entry.task.slice(0,20).trim()+"..." : entry.task)} </h2>
                                                            <h3 style={{fontSize: "0.8 "}}> {data.contentVisible  && 'Created: '+ entry.dateCreated}</h3>
                                                        </div>
                                                        <IconHolder>
                                                            {
                                                                data.collection === 'tasks' && 
                                                                <CompleteIcon theme={data.theme} onClick={()=>{data.completeTask(entry)}}>
                                                                {data.contentVisible && <i className="fas fa-check"></i>}
                                                                </CompleteIcon>
                                                            }
                                                            
                                                            {
                                                                data.collection === 'completed'  &&
                                                                <RevertIcon onClick={() =>{data.revertTask(entry)}} theme={data.theme}>
                                                                    {data.contentVisible && <i class="fas fa-arrow-left"></i>}
                                                                </RevertIcon>
                                                                
                                                            }

                                                            {
                                                                
                                                                <DeleteIcon
                                                                theme={data.theme}
                                                                onClick={()=>{
                                                                        if(data.currentCard === data.tasks.length -1){
                                                                                data.setCurrentCard(0)
                                                                                data.deleteTask(entry.docId, data.collection)
                                                                            }
                                                                            else{
                                                                                data.deleteTask(entry.docId, data.collection)
                                                                            }
                                                                        }
                                                                    }
                                                            >
                                                                {data.contentVisible && <i className="far fa-trash-alt"></i>}
                                                                </DeleteIcon>
                                                            }
                                                            
                                                            {
                                                                data.collection === 'tasks' &&
                                                                    <ArchiveIcon theme={data.theme} onClick={()=>{data.archiveTask(entry)}}>
                                                                                {data.contentVisible && <i className="fas fa-book"></i>}
                                                                    </ArchiveIcon>
                                                            }
                                                            
                                                            {
                                                                data.collection === 'tasks'  &&
                                                                <EditIcon onClick={() =>{edit(entry)}} theme={data.theme}>
                                                                    {data.contentVisible && <i className="fas fa-pen"></i>}
                                                                </EditIcon>
                                                            }
                                                        </IconHolder>
                                                </TaskEntrySub>
                                
                                         </TaskEntry>
                                        )
                                    }) 
                                   
                                }    
                                {data.tasks.length > 0? data.tasks.map((entry) => {

                                        
                                  if(data.matchResult){

                                      if(entry === data.tasks[data.currentCard]){
                                          
                                         return(
                                             <TaskEntry theme={data.theme} key={entry.docId} depth={data.index} flip={data.cardFlip}>
                                                     
                                             <TaskEntrySub theme={data.theme} >                                               
                                                      {data.contentVisible  && 
                                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}><p>task</p> 
                                                      
                                                        {
                                                            data.collection === 'tasks' &&
                                                            <Diamond 
                                                                theme={data.theme} 
                                                                onClick={()=>{
                                                                    data.trackDoc(entry)
                                                                }}
                                                                activated={entry.tracked}  
                                                            />
                                                        }
                                                      
                                                      
                                                    </div>
                                                      }
                                                      <h2 style={{marginBottom: "0"}}>{data.contentVisible  && ( entry.task.length > 17? entry.task.slice(0,25).trim()+"..." : entry.task.slice(0,25))} </h2>
                                                      <h3 style={{fontSize: "0.8rem"}}> {data.contentVisible  && 'Created: '+ entry.dateCreated}</h3>
                                             </TaskEntrySub>
                                             <IconHolder>
                                                 
                                                {
                                                     data.collection === 'tasks' && 
                                                     <CompleteIcon theme={data.theme} onClick={()=>{data.completeTask(entry)}}>
                                                     {data.contentVisible && <i className="fas fa-check"></i>}
                                                    </CompleteIcon>
                                                }
                                                
                                                {
                                                    data.collection === 'completed'  &&
                                                    <RevertIcon onClick={() =>{data.revertTask(entry)}}  theme={data.theme}>
                                                        {data.contentVisible && <i class="fas fa-arrow-left"></i>}
                                                    </RevertIcon>
                                                    
                                                }

                                                {
                                                     
                                                     <DeleteIcon
                                                       theme={data.theme}
                                                       onClick={()=>{
                                                        if(data.currentCard === data.tasks.length -1){
                                                                data.setCurrentCard(0)
                                                                data.deleteTask(entry.docId, data.collection)
                                                            }
                                                            else{
                                                                data.deleteTask(entry.docId, data.collection)
                                                            }
                                                        }
                                                    }
                                                  >
                                                      {data.contentVisible && <i className="far fa-trash-alt"></i>}
                                                    </DeleteIcon>
                                                 }
                                                 
                                                {
                                                      data.collection === 'tasks' &&
                                                        <ArchiveIcon theme={data.theme} onClick={()=>{data.archiveTask(entry)}}>
                                                                    {data.contentVisible && <i className="fas fa-book"></i>}
                                                        </ArchiveIcon>
                                                }
                                                  
                                                {
                                                      data.collection === 'tasks'  &&
                                                    <EditIcon onClick={() =>{edit(entry)}} theme={data.theme}>
                                                        {data.contentVisible && <i className="fas fa-pen"></i>}
                                                    </EditIcon>
                                                }

                                                


                                             </IconHolder>
                                          </TaskEntry>
                                          )
                                        }
                                        
                                    }
                                                                    
                                        
                                } ) : <p>There are no tasks to display</p>}
                                {data.matchResult && data.tasks.length > 0 && <Next 
                                    theme={data.theme} 
                                    onClick={data.flipNext} 
                                    disabled={data.currentCard === data.tasks.length-1}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-right"></i> 
                                </Next>}
                            </TaskWindow>
                        
                        {   !data.matchResult && data.tasks.length > 0 &&
                            <PageNav>
                                <Last 
                                    theme={data.theme} 
                                    onClick={data.pagePrevious} 
                                    disabled={data.currentCard === 0}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-left"></i> 
                                </Last>
                                
                                <PageNumbers>{data.pageNumber+1} / {data.pageCount}</PageNumbers>
                                <Next 
                                    theme={data.theme} 
                                    onClick={data.pageNext} 
                                    disabled={data.currentCard === data.tasks.length-1}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-right"></i> 
                                </Next>                                
                            </PageNav>

                        }

                        

                </TaskContainer>

   
    )
}

export default TaskComponent