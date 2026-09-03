import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const { name, email, phone, position, portfolio, message } = body;

    // حفظ البيانات في الداتا بيز
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

    // إعدادات إرسال الإيميل
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // التصميم الاحترافي للإيميل
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 طلب توظيف جديد: ${position} - Start Online Agency`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px; overflow: hidden; direction: rtl; text-align: right;">
          <div style="background-color: #1A1A1A; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">Start Online Agency</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #333;">مرحباً،</h2>
            <p style="color: #555; font-size: 16px;">هناك طلب توظيف جديد تم تقديمه عبر الموقع، وهذه هي التفاصيل:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 120px;">الاسم:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">الوظيفة:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #E01E2E; font-weight: bold;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">الإيميل:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">الموبايل:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">لينك الأعمال:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="${portfolio}" style="color: #E01E2E; text-decoration: none; font-weight: bold;">اضغط هنا للمشاهدة</a></td>
              </tr>
            </table>
            
            ${message ? `
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-right: 4px solid #E01E2E;">
              <strong>رسالة إضافية من المتقدم:</strong><br>
              <p style="color: #555; margin-top: 5px;">${message}</p>
            </div>
            ` : ''}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Application saved and email sent!" }, { status: 201 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  } finally {
    // إغلاق الاتصال بقاعدة البيانات لتوفير الموارد
    await prisma.$disconnect();
  }
}