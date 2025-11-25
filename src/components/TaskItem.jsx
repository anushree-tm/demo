import React,{useState}from'react'
export default function({task,onUpdate,onDelete,onToggle}){
  const[e,se]=useState(false)
  const[t,st]=useState(task.title),[d,sd]=useState(task.description),[p,sp]=useState(task.priority),[due,sDue]=useState(task.dueDate)
  const save=()=>{onUpdate({...task,title:t,description:d,priority:p,dueDate:due});se(false)}
  return <div className="p-3 border rounded bg-white flex justify-between gap-3">
    <div className="flex-1">
      {e?
        <div className="space-y-2">
          <input className="w-full p-2 border" value=t onChange={x=>st(x.target.value)}/>
          <textarea className="w-full p-2 border" value={d} onChange={x=>sd(x.target.value)}/>
          <select className="p-2 border" value={p} onChange={x=>sp(x.target.value)}><option>Low</option><option>Medium</option><option>High</option></select>
          <input type="date" className="p-2 border" value={due} onChange={x=>sDue(x.target.value)}/>
        </div>
        :
        <>
          <div className="flex items-center gap-2"><input type="checkbox" checked={task.completed} onChange={()=>onToggle(task.id)}/><span>{task.title}</span></div>
          <div className="text-sm text-slate-600">{task.description}</div>
        </>
      }
    </div>
    <div className="flex flex-col gap-2">
      {e?
        <>
          <button onClick={save} className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
          <button onClick={()=>se(false)} className="px-3 py-1 border rounded">Cancel</button>
        </>
        :
        <>
          <button onClick={()=>se(true)} className="px-3 py-1 border rounded">Edit</button>
          <button onClick={()=>{if(confirm('Delete?'))onDelete(task.id)}} className="px-3 py-1 border rounded">Delete</button>
        </>
      }
    </div>
  </div>
}