import React from 'react'
import { useAuth } from './hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function App({ children }){
  const { user, logout } = useAuth()
  const nav = useNavigate()

  if (!user) { nav('/login'); return null }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Nelo Task Manager</h1>
        <div className="flex gap-3 items-center">
          <span className="text-sm text-slate-600">{user.email}</span>
          <button className="px-3 py-1 border rounded" onClick={() => { logout(); nav('/login') }}>Logout</button>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}