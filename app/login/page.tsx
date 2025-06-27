'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Mail, Lock } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (res?.ok) {
      toast.success('Login successful!')
      router.push('/dashboard')
    } else {
      toast.error('Invalid credentials')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard?google=success' })}
           className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition cursor-pointer"  
        >
         <FcGoogle className="text-xl" />
          <span className="text-sm text-gray-700">Continue with Google</span>
        </button>


        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
