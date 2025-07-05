// app/api/submit-rating/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

function getHashKey(userAgent: string, ip: string) {
  return crypto.createHash('sha256').update(userAgent + ip).digest('hex')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { rating, feedback } = body

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Invalid rating' }, { status: 400 })
    }

    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'
    const hashedKey = getHashKey(userAgent, ip)

    // Check if user has already rated
    // const existing = await prisma.rating.findUnique({
    //   where: { hashedKey },
    // })

    // if (existing) {
    //   return NextResponse.json({ message: 'Already submitted' }, { status: 409 })
    // }

    // Create rating
    await prisma.rating.create({
      data: {
        rating,
        feedback,
        hashedKey,
      },
    })
    console.log("💥 API HIT: /api/submit-rating")
    return NextResponse.json({ success: true }, { status: 201 })

  } catch (err) {
    console.error('[SUBMIT_RATING_ERROR]', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
