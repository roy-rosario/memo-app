import { useContext, useEffect } from 'react'
import {

        TaskEntrySmall,
        TaskEntryLarge,
        TaskContainer,
        TaskWindow,
        IconHolder,
        DeleteIcon,
        CompleteIcon,
        ArchiveIcon,
        RevertIcon,
        TaskEntrySub,
        LastSmall,
        LastLarge, 
        NextSmall,
        NextLarge,
        Diamond,
        PageNav,
        PageNumbers,
        EditIcon,
        TaskTitle,
        TaskHeader,
        ListTypeTray,
        CardButton,
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
                               
                                    <ListTypeTray>
                                        <CardButton onClick={()=>{data.toggleTaskTypes('tasks')}} theme={data.theme}>current</CardButton>
                                        <CardButton onClick={()=>{data.toggleTaskTypes('completed')}} theme={data.theme}>completed</CardButton>
                                        <CardButton onClick={()=>{data.toggleTaskTypes('archived')}} theme={data.theme}>archived</CardButton>
                                    </ListTypeTray>                                
                                
                        </TaskHeader>
                   
                            <TaskWindow theme={data.theme}>
                                {data.tasks.length > 0 && 
                                <LastSmall 
                                    theme={data.theme} 
                                    onClick={data.flipLast} 
                                    disabled={data.currentCard === 0}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-left"></i>
                                </LastSmall>}
                                { data.tasks.length > 0 &&
                                    data.tasks.slice(data.itemsVisited, data.itemsVisited + data.itemsPerPage)
                                    .map(entry => {
                                        return(
                                            <TaskEntryLarge theme={data.theme} key={entry.docId} depth={data.index} flip={data.cardFlip}>
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
                                                            <p>{data.contentVisible  && data.collection}</p>
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
                                
                                         </TaskEntryLarge>
                                        )
                                    }) 
                                   
                                }    
                                {data.tasks.length > 0? data.tasks.map((entry) => {

                                        
                                  
                                      if(entry === data.tasks[data.currentCard]){
                                          
                                         return(
                                             <TaskEntrySmall theme={data.theme} key={entry.docId} depth={data.index} flip={data.cardFlip}>
                                                     
                                             <TaskEntrySub theme={data.theme} >                                               
                                                      {data.contentVisible  && 
                                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}><p>{data.collection}</p> 
                                                      
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
                                          </TaskEntrySmall>
                                          )
                                        }
                                        
                                    
                                                                    
                                        
                                } ) : <p>There are no tasks to display</p>}
                                {data.tasks.length > 0 && 
                                <NextSmall 
                                    theme={data.theme} 
                                    onClick={data.flipNext} 
                                    disabled={data.currentCard === data.tasks.length-1}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-right"></i> 
                                </NextSmall>}
                            </TaskWindow>
                        
                        {   data.tasks.length > 0 &&
                            <PageNav>
                                <LastLarge 
                                    theme={data.theme} 
                                    onClick={data.pagePrevious} 
                                    disabled={data.currentCard === 0}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-left"></i> 
                                </LastLarge>
                                
                                <PageNumbers>{data.pageNumber+1} / {data.pageCount}</PageNumbers>
                                <NextLarge 
                                    theme={data.theme} 
                                    onClick={data.pageNext} 
                                    disabled={data.currentCard === data.tasks.length-1}
                                    onMouseDown={()=>{data.setBig(true)}} 
                                    onMouseUp={()=>{data.setBig(false)}}
                                    scaling={data.big}
                                >
                                    <i class="fas fa-chevron-right"></i> 
                                </NextLarge>                                
                            </PageNav>

                        }

                        

                </TaskContainer>

   
    )
}

export default TaskComponent