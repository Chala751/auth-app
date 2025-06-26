'use client'

import { signOut } from 'next-auth/react'
import { toast } from 'sonner'

export default function LogoutButton() {
  const handleLogout = () => {
    toast.success('Logging out...')
    setTimeout(() => signOut(), 1000)
  }

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition cursor-pointer"
    >
      Logout
    </button>
  )
}
