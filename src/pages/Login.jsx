import React,{useState}from'react'
import{useNavigate}from'react-router-dom'
import{useAuth}from'../hooks/useAuth'
export default function(){
  const{login}=useAuth();const nav=useNavigate()
  const[e,se]=useState(''),[p,sp]=useState('')
  return <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <form onSubmit={x=>{x.preventDefault();if(!e||!p)return;login(e);nav('/dashboard')}} className="w-full max-w-md p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="w-full mb-3 p-2 border" value={e} onChange={y=>se(y.target.value)} placeholder="Email"/>
      <input type="password" className="w-full mb-3 p-2 border" value={p} onChange={y=>sp(y.target.value)} placeholder="Password"/>
      <button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>
    </form></div>
}