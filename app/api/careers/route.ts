import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // تعريف الداتا بيز جوه الدالة عشان تشتغل وقت التقديم الفعلي فقط
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const { name, email, phone, position, portfolio, message } = body;

    // حفظ البيانات
    await prisma.jobApplication.create({
      data: {
        name,
        email,
        phone,
        position,
        portfolio,
        message,
      },
    });

    // إرسال الإيميل
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 طلب توظيف جديد: ${position} - Start Online Agency`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #E01E2E;">طلب توظيف جديد من ${name}</h2>
          <p><strong>الوظيفة:</strong> ${position}</p>
          <p><strong>رقم الموبايل:</strong> ${phone}</p>
          <p><strong>الإيميل:</strong> ${email}</p>
          <p><strong>معرض الأعمال:</strong> <a href="${portfolio}">اضغط هنا للمشاهدة</a></p>
          <p><strong>رسالة إضافية:</strong> ${message || "لا توجد رسالة"}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Application saved and email sent!" }, { status: 201 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  } finally {
    // خطوة احترافية لإنهاء الاتصال بعد كل طلب
    await prisma.$disconnect();
  }
}