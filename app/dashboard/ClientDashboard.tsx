'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
  name?: string | null
  email?: string | null
  role?: string | null
}

export default function ClientDashboard({ name, email,role }: Props) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const fromGoogle = searchParams.get('google') === 'success'
    if (fromGoogle) {
      toast.success('Google login successful!')
    }
  }, [searchParams])

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
        {role && <div>Role: <span className="text-indigo-600 font-medium">{role}</span></div>}
      </div>
      {/* 👑 Show admin link */}
     {role === 'admin' && (
     <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold text-green-600">🔐 Admin Access Granted</h2>
      <p className="text-gray-600">You can manage system-wide settings and users.</p>
      <a
       href="/admin"
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
      Go to Admin Panel
      </a>
     </div>
     )}

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
