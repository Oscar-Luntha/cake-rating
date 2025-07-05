import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const wall = await prisma.wallOfFame.findUnique({ where: { id: 1 } })
  if (!wall) {
    return NextResponse.json({ error: 'Wall of fame not found' }, { status: 404 })
  }
  return NextResponse.json({ images: wall.images })
}
