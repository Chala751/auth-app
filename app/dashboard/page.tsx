import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return <div>Access Denied</div>
  }

  return <h1>Welcome, {session.user?.email}</h1>
}
