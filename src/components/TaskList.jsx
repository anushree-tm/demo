import React from'react'
import TaskItem from'./TaskItem'
export default({tasks,onUpdate,onDelete,onToggle})=>{
  return <div className="space-y-3">{tasks.map(t=><TaskItem key={t.id} task={t} onUpdate={onUpdate} onDelete={onDelete} onToggle={onToggle}/>)}</div>
}