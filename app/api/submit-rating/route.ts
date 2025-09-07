import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { rating, feedback } = body

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Invalid rating' }, { status: 400 })
    }

    // Create rating (no hashedKey restriction)
    await prisma.rating.create({
      data: {
        rating,
        feedback,
      },
    })

    console.log("💥 API HIT: /api/submit-rating")
    return NextResponse.json({ success: true }, { status: 201 })

  } catch (err) {
    console.error('[SUBMIT_RATING_ERROR]', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
