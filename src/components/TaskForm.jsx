import React,{useState}from'react'
import{v4}from'uuid'
export default function({onCreate}){
  const[t,st]=useState(''),[d,sd]=useState(''),[p,sp]=useState('Medium'),[due,sDue]=useState('')
  return <form onSubmit={e=>{e.preventDefault();if(!t||!due)return;onCreate({id:v4(),title:t,description:d,priority:p,dueDate:due,completed:false});st('');sd('');sp('Medium');sDue('')}} className="space-y-3">
    <input className="w-full p-2 border" value={t} onChange={e=>st(e.target.value)} placeholder="Title"/>
    <textarea className="w-full p-2 border" value={d} onChange={e=>sd(e.target.value)} placeholder="Desc"/>
    <select value={p} onChange={e=>sp(e.target.value)} className="p-2 border"><option>Low</option><option>Medium</option><option>High</option></select>
    <input type="date" className="p-2 border" value={due} onChange={e=>sDue(e.target.value)}/>
    <button className="px-3 py-2 bg-green-600 text-white rounded">Add</button>
  </form>
}