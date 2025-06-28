import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(req: NextRequest, context: any) {
  try {
    const { id } = context.params
    const data = await req.json()

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) }, // Or just use `id` if it's a string
      data,
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, context: any) {
  try {
    const { id } = context.params

    await prisma.user.delete({
      where: { id: parseInt(id) }, // Or just `id` if it's string-based
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
