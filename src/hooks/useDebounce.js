import {useEffect,useState} from'react'
export default(v,d=300)=>{const[s,S]=useState(v);useEffect(()=>{const id=setTimeout(()=>S(v),d);return()=>clearTimeout(id)},[v,d]);return s}