import React from'react'
export default({filter,setFilter})=>{
  const o=['All','Completed','Pending','High','Medium','Low']
  return <div className="flex gap-2">{o.map(x=><button key={x} onClick={()=>setFilter(x)} className={"px-3 py-1 border rounded "+(filter===x?'bg-slate-200':'')}>{x}</button>)}</div>
}