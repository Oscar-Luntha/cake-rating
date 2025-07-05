import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

const ADMIN_KEY = process.env.ADMIN_KEY

export async function GET(req: Request) {
  const url = new URL(req.url)
  const key = url.searchParams.get("key")

  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const ratings = await prisma.rating.findMany({
    orderBy: { createdAt: "desc" },
  })

  const average = await prisma.rating.aggregate({
    _avg: { rating: true },
    _count: true,
  })

  // Ratings per day (raw SQL)
  const dailyRaw: any = await prisma.$queryRaw`
  SELECT 
    DATE_TRUNC('hour', "createdAt") AS hour,
    COUNT(*) AS count,
    AVG(rating) AS avg_rating
  FROM "Rating"
  GROUP BY hour
  ORDER BY hour ASC
`


  // Convert BigInt fields to number
  const hourly = dailyRaw.map((row: any) => ({
    hour: row.hour.toISOString().slice(0, 13) + ":00", // "2025-07-02T14:00"
    count: typeof row.count === "bigint" ? Number(row.count) : row.count,
    avg_rating: typeof row.avg_rating === "bigint" ? Number(row.avg_rating) : row.avg_rating,
  }))
  

  return NextResponse.json({
    ratings,
    average: average._avg.rating || 0,
    total: typeof average._count === "bigint" ? Number(average._count) : average._count,
    hourly,
  })
  
}
