// app/api/wall/update/route.ts
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { imageUrl } = await req.json()

  const record = await prisma.wallOfFame.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      images: [imageUrl, null, null, null, null, null]
    },
    update: {}
  })

  const images = [...record.images]
  const emptyIndex = images.findIndex((img) => !img)

  if (emptyIndex === -1) {
    return new NextResponse("No empty slots", { status: 400 })
  }

  images[emptyIndex] = imageUrl

  await prisma.wallOfFame.update({
    where: { id: 1 },
    data: { images }
  })

  return NextResponse.json({ success: true })
}
