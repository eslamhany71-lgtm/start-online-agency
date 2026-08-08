import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// السطر ده هو السر! بيجبر السيرفر يجيب البيانات لايف كل مرة وميعتمدش على الذاكرة
export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const applications = await prisma.jobApplication.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}