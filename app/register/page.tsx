'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = async (e: any) => {
    e.preventDefault()
    await axios.post('/api/register', { email, password })
    router.push('/login')
  }

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  )
}
