'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User } from 'lucide-react'
import { toast } from 'sonner'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/register', { name, gender, email, password })
      toast.success('Registered successfully! Redirecting...')
      setName('')
      setGender('')
      setEmail('')
      setPassword('')
      setTimeout(() => router.push('/login'), 1500)
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Registration failed')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">Create your account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-900" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-900" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-900" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
