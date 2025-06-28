import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params
  const data = await req.json()

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  })

  return Response.json(updatedUser)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.user.delete({ where: { id: parseInt(params.id) } })
  return NextResponse.json({ success: true })
}
