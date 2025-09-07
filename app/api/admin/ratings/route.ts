import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

const ADMIN_KEY = process.env.ADMIN_KEY

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const key = url.searchParams.get("key")

    if (key !== ADMIN_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch all ratings
    const ratings = await prisma.rating.findMany({
      orderBy: { createdAt: "desc" },
    })

    // Calculate average + total count
    const aggregate = await prisma.rating.aggregate({
      _avg: { rating: true },
      _count: true,
    })

    // Ratings per hour
    const hourlyRaw: any = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('hour', "createdAt") AS hour,
        COUNT(*) AS count,
        AVG(rating) AS avg_rating
      FROM "Rating"
      GROUP BY hour
      ORDER BY hour ASC
    `

    // Normalize safely
    const hourly = (hourlyRaw || []).map((row: any) => ({
      hour: row?.hour ? row.hour.toISOString().slice(0, 13) + ":00" : "unknown",
      count: Number(row?.count || 0),
      avg_rating: Number(row?.avg_rating || 0),
    }))

    return NextResponse.json({
      ratings,
      average: aggregate._avg.rating || 0,
      total: aggregate._count || 0,
      hourly,
    })
  } catch (err) {
    console.error("[ADMIN_RATINGS_ERROR]", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
