import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // تم إزالة orderBy لتجنب تعارض أنواع البيانات في Prisma
    const applications = await prisma.jobApplication.findMany();
    
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}