import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Crown } from 'lucide-react'
import LogoutButton from '../components/LogoutButton'
import ManageUsers from './ManageUsers'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user?.role !== 'admin') {
    redirect('/unauthorized')
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 space-y-10">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200 text-center">
        <div className="flex justify-center">
          <Crown className="h-14 w-14 text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold text-blue-700">👑 Admin Dashboard</h1>
        <p className="text-lg text-gray-700">
          Welcome, <span className="font-semibold">{session.user?.name}</span>! You have admin access.
        </p>

        {/* 🔒 Logout */}
        <div className="flex justify-center mt-4">
          <LogoutButton />
        </div>
      </div>

      {/* 🧑‍💼 Manage Users Section */}
      <div className="max-w-5xl mx-auto">
        <ManageUsers />
      </div>
    </div>
  )
}
