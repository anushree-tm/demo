import React,{useState,useEffect}from'react'
import TaskForm from'../components/TaskForm'
import TaskList from'../components/TaskList'
import SearchBar from'../components/SearchBar'
import FilterBar from'../components/FilterBar'
import{loadTasks,saveTasks}from'../utils/storage'
import{notifyPendingTasks}from'../utils/mailer'
import{useAuth}from'../hooks/useAuth'
export default function(){
  const{user}=useAuth()
  const[t,st]=useState(loadTasks)
  const[s,ss]=useState(''),[f,sf]=useState('All')
  useEffect(()=>saveTasks(t),[t])
  useEffect(()=>{const id=setInterval(()=>notifyPendingTasks(t,user?.email),20000);return()=>clearInterval(id)},[t])
  const fc=t.filter(x=>{
    if(f==='Completed'&&!x.completed)return false
    if(f==='Pending'&&x.completed)return false
    if(['High','Medium','Low'].includes(f)&&x.priority!==f)return false
    if(s&&! (x.title+' '+x.description).toLowerCase().includes(s.toLowerCase()))return false
    return true
  })
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-1 bg-white p-4 rounded shadow"><TaskForm onCreate={v=>st([v,...t])}/></div>
    <div className="md:col-span-2 bg-white p-4 rounded shadow">
      <div className="flex gap-3 mb-3"><SearchBar onSearch={ss}/><FilterBar filter={f} setFilter={sf}/></div>
      <TaskList tasks={fc} onUpdate={u=>st(t.map(x=>x.id===u.id?u:x))} onDelete={id=>st(t.filter(x=>x.id!==id))} onToggle={id=>st(t.map(x=>x.id===id?{...x,completed:!x.completed}:x))}/>
    </div>
  </div>
}