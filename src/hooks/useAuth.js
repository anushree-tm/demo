import { useState, useEffect } from 'react'
const SESSION_KEY='nelo_user'
let listeners=[]
export function useAuth(){
  const [user,setUser]=useState(()=>JSON.parse(sessionStorage.getItem(SESSION_KEY))||null)
  useEffect(()=>{
    if(user)sessionStorage.setItem(SESSION_KEY,JSON.stringify(user))
    else sessionStorage.removeItem(SESSION_KEY)
    listeners.forEach(fn=>fn(user))
    if(!listeners.includes(setUser))listeners.push(setUser)
    return()=>listeners=listeners.filter(f=>f!==setUser)
  },[user])
  return{user,login:(email)=>setUser({email}),logout:()=>setUser(null)}
}