'use client'

import { User, ShieldCheck, Globe, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col justify-center items-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-full space-y-8 text-center border border-gray-200">
        <h1 className="text-4xl font-extrabold text-blue-700">🚀 Welcome to AuthApp</h1>
        <p className="text-gray-600 text-lg">
          Securely manage users, roles, and admin access with ease. Login or register to continue.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Link
            href="/login"
            className="flex flex-col items-center justify-center bg-blue-600 text-white py-6 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            <User className="h-8 w-8 mb-2" />
            <span className="text-lg font-semibold">Login</span>
          </Link>

          <Link
            href="/"
            className="flex flex-col items-center justify-center bg-green-600 text-white py-6 px-4 rounded-xl hover:bg-green-700 transition"
          >
            <ShieldCheck className="h-8 w-8 mb-2" />
            <span className="text-lg font-semibold">Register</span>
          </Link>
        </div>

        <div className="border-t pt-6 text-sm text-gray-500">
          <p>Features you can explore:</p>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-purple-600" />
              Interactive Dashboard
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-yellow-600" />
              Role-Based Access Control (RBAC)
            </li>
            <li className="flex items-center gap-2">
              <User className="h-5 w-5 text-green-600" />
              Manage Users & Roles
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              OAuth (Google Login)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
