import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  const hashedPassword = await hash(password, 10)

  const userExists = await prisma.user.findUnique({ where: { email } })
  if (userExists) return NextResponse.json({ error: 'User already exists' }, { status: 400 })

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword
    }
  })

  return NextResponse.json({ success: true })
}
