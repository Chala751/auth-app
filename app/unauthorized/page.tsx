'use client'

import { ShieldX } from 'lucide-react'
import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center space-y-6 border">
        <div className="flex justify-center">
          <ShieldX className="h-16 w-16 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Unauthorized Access
        </h1>
        <p className="text-gray-600">
          ❌ You do not have permission to view this page.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
