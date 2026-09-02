import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET() {
  // نقلنا تعريف الداتا بيز هنا عشان تشتغل "لايف" بس ومش وقت الرفع
  const prisma = new PrismaClient();
  
  try {
    const applications = await prisma.jobApplication.findMany();
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}