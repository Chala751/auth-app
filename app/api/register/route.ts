import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
  const { name, gender, email, password ,role = "user"} = await req.json()

  const userExists = await prisma.user.findUnique({ where: { email } })
  if (userExists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const hashedPassword = await hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      gender,
      email,
      password: hashedPassword,
      role,
    },
  })

  return NextResponse.json({ success: true })
}
