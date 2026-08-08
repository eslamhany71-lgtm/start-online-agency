import { NextResponse } from "next/server";
// استدعاء Prisma للتعامل مع قاعدة البيانات
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // 1. البوسطجي بيستلم الجواب (البيانات) من العميل
    const body = await request.json();
    
    // 2. البوسطجي بيحط البيانات في أرشيف الشركة (قاعدة البيانات)
    const application = await prisma.jobApplication.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        position: body.position,
        portfolio: body.portfolio,
        message: body.message,
      },
    });

    // 3. البوسطجي بيرد على العميل ويقوله "تم الإرسال بنجاح"
    return NextResponse.json({ success: true, application }, { status: 201 });

  } catch (error) {
    console.error("Error saving application:", error);
    // لو حصلت مشكلة، البوسطجي بيقول إن فيه إيرور
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}