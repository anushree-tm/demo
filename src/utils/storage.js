const KEY='nelo_tasks_v1'
export const loadTasks=()=>JSON.parse(localStorage.getItem(KEY)||'[]')
export const saveTasks=t=>localStorage.setItem(KEY,JSON.stringify(t))