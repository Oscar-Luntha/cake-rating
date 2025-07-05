// app/api/wall/route.ts
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const record = await prisma.wallOfFame.findUnique({ where: { id: 1 } })
  const images = record?.images ?? Array(6).fill(null)
  return NextResponse.json({ images })
}
