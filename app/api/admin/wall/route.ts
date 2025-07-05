import { NextResponse } from "next/server"

// Simulated wall data (use your DB instead)
let wallImages: (string | null)[] = [null, null, null, null, null, null]

export async function GET() {
  return NextResponse.json({ images: wallImages })
}

export async function POST(req: Request) {
  const { imageUrl } = await req.json()

  const emptyIndex = wallImages.findIndex((img) => img === null)
  if (emptyIndex === -1) {
    return new NextResponse("No empty slots", { status: 400 })
  }

  wallImages[emptyIndex] = imageUrl
  return NextResponse.json({ success: true, slot: emptyIndex })
}
