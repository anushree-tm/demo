export function notifyPendingTasks(tasks,email){
  const p=tasks.filter(t=>!t.completed)
  if(!p.length)return
  console.log("MOCK EMAIL to",email,"Pending:",p.map(x=>x.title).join(', '))
}