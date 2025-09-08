import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // ensure you have a prisma client

// Create new cake
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, imageUrl } = body;

    if (!name || !price || !imageUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const cake = await prisma.cake.create({
      data: { name, price, imageUrl },
    });

    return NextResponse.json(cake, { status: 201 });
  } catch (error) {
    console.error("Error creating cake:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Get all cakes
export async function GET() {
  try {
    const cakes = await prisma.cake.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(cakes);
  } catch (error) {
    console.error("Error fetching cakes:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
