import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect('/login')

  return (
    <div>
      <h1>Welcome, {session.user?.email}</h1>
      <form action="/api/auth/signout" method="post">
        <button formAction="/api/auth/signout" type="submit">Logout</button>
      </form>
    </div>
  )
}
