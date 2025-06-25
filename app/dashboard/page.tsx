import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth'
import { redirect } from 'next/navigation'
import ClientDashboard from './ClientDashboard'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')

  const { name, email } = session.user!

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <ClientDashboard name={name} email={email} />
    </div>
  )
}
