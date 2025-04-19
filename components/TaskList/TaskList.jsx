import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex flex-row gap-5 w-full py-5 mt-10'>
     {data.tasks.map((elem,idx)=>{
      if(elem.active){
        return <AcceptTask key={idx}/> 
      }
      if(elem.NewTask){
        return <NewTask key={idx}/> 
      }
      if(elem.completed){
        return <CompleteTask key={idx}/> 
      }
      if(elem.failed){
        return <FailedTask key={idx}/> 
      }
     })}
      
    </div>
  )
}

export default TaskList
