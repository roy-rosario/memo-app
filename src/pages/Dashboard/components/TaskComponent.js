import {

        TaskEntry,
        TaskContainer,
        TaskWindow,
        IconHolder,
        DeleteIcon,
        CompleteIcon,
        ArchiveIcon,
        TaskEntrySub,
        Last, 
        Next,
        Diamond,
        PageNav,
        PageNumbers,
        EditIcon,
        TaskTitle,
        TaskHeader,
        StanButton
    } 
from '../styles/dashboardStyles' 



function TaskComponent({data}){

    
    return(
                
                <TaskContainer theme={data.theme}>
                        <TaskHeader>
                            <TaskTitle>{data.collection}</TaskTitle> 
                            <div>
                                <StanButton onClick={()=>{data.toggleTaskTypes('tasks')}} theme={data.theme}>current</StanButton>
                                <StanButton onClick={()=>{data.toggleTaskTypes('completed')}} theme={data.theme}>completed</StanButton>
                            </div>
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
                                                <Diamond 
                                                theme={data.theme} 
                                                onClick={()=>{
                                                    data.trackDoc(entry)
                                                }}
                                                activated={entry.tracked}  
                                                />
                                                <TaskEntrySub theme={data.theme} >                                               
                                                        
                                                        <div style={{width: '100%'}}>
                                                            <p>{data.contentVisible  && 'task'}</p>
                                                            <h2 style={{marginBottom: "0"}}>{data.contentVisible  && (entry.task.length > 19? entry.task.slice(0,20).trim()+"..." : entry.task)} </h2>
                                                            <h3 style={{fontSize: "0.8rem"}}> {data.contentVisible  && 'Created: '+ entry.dateCreated}</h3>
                                                        </div>
                                                        <IconHolder>
                                                            <CompleteIcon theme={data.theme} onClick={()=>{data.completeTask(entry)}}>
                                                                {data.contentVisible && <i className="fas fa-check"></i>}
                                                            </CompleteIcon>
                                                            <DeleteIcon
                                                                theme={data.theme}
                                                                onClick={()=>{
                                                                    data.deleteTask(entry.docId)
                                                                }}
                                                            >
                                                                {data.contentVisible && <i className="far fa-trash-alt"></i>}
                                                            </DeleteIcon>
                                                            <ArchiveIcon theme={data.theme}>
                                                                {data.contentVisible && <i className="fas fa-book"></i>}
                                                            </ArchiveIcon>
                                                            <EditIcon onClick={() =>{data.edit(entry)}} theme={data.theme}>
                                                                {data.contentVisible && <i className="fas fa-pen"></i>}
                                                            </EditIcon>
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
                                                      {data.contentVisible  && <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}><p>task</p> <Diamond 
                                                theme={data.theme} 
                                                onClick={()=>{
                                                    data.trackDoc(entry)
                                                }}
                                                activated={entry.tracked}  
                                                /></div>}
                                                      <h2 style={{marginBottom: "0"}}>{data.contentVisible  && ( entry.task.length > 17? entry.task.slice(0,25).trim()+"..." : entry.task.slice(0,25))} </h2>
                                                      <h3 style={{fontSize: "0.8rem"}}> {data.contentVisible  && 'Created: '+ entry.dateCreated}</h3>
                                             </TaskEntrySub>
                                             <IconHolder>
                                                 <CompleteIcon theme={data.theme} onClick={()=>{data.completeTask(entry)}}>
                                                             {data.contentVisible && <i className="fas fa-check"></i>}
                                                 </CompleteIcon>
                                                  <DeleteIcon
                                                       theme={data.theme}
                                                       onClick={()=>{
                                                            if(data.currentCard === data.tasks.length -1){
                                                                    data.setCurrentCard(0)
                                                                    data.deleteTask(entry.docId)
                                                                }
                                                                else{
                                                                    data.deleteTask(entry.docId)
                                                                }
                                                            }
                                                        }
                                                  >
                                                      {data.contentVisible && <i className="far fa-trash-alt"></i>}
                                                   </DeleteIcon>
                                                   <ArchiveIcon theme={data.theme}>
                                                                {data.contentVisible && <i className="fas fa-book"></i>}
                                                    </ArchiveIcon>
                                                    <EditIcon onClick={() =>{data.edit(entry)}} theme={data.theme}>
                                                        {data.contentVisible && <i className="fas fa-pen"></i>}
                                                    </EditIcon>
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