import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect('/login')

  const { name, email } = session.user!

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">Welcome to Your Dashboard</h1>

        {/* 👤 User Info */}
        <div className="text-center text-lg text-gray-800 space-y-1">
          {name && <div>Hello, <span className="font-semibold">{name}</span>!</div>}
          <div>You are logged in as <span className="font-semibold">{email}</span></div>
        </div>

        {/* 🔒 Logout */}
        <form action="/api/auth/signout" method="post" className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition cursor-pointer"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  )
}
