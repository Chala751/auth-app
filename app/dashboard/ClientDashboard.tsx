'use client'

import { signOut } from 'next-auth/react'
import { toast } from 'sonner'

interface Props {
  name?: string | null
  email?: string | null
}

export default function ClientDashboard({ name, email }: Props) {
  const handleLogout = () => {
    toast.success('Logging out...')
    setTimeout(() => signOut(), 1000)
  }

  return (
    <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Welcome to Your Dashboard</h1>

      {/* 👤 User Info */}
      <div className="text-center text-lg text-gray-800 space-y-1">
        {name && <div>Hello, <span className="font-semibold">{name}</span>!</div>}
        <div>You are logged in as <span className="font-semibold">{email}</span></div>
      </div>

      {/* 🔒 Logout */}
      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
