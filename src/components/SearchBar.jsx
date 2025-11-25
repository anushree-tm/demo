import React,{useState,useEffect}from'react'
import useDebounce from'../hooks/useDebounce'
export default function({onSearch}){
  const[v,sv]=useState('');const d=useDebounce(v,400)
  useEffect(()=>onSearch(d.trim()),[d])
  return <input className="flex-1 p-2 border" value={v} onChange={e=>sv(e.target.value)} placeholder="Search..."/>
}