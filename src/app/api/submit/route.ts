import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, instagram, followers } = body;

        // Validate required fields
        if (!name || !email || !instagram || !followers) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // 1. Send confirmation email to the person who submitted
        await resend.emails.send({
            from: `H1Grow <noreply@${process.env.FROM_DOMAIN || "resend.dev"}>`,
            to: [email],
            subject: "You're in! Welcome to H1Grow 🚀",
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
                    <h1 style="font-size: 28px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 24px;">
                        Welcome, ${name}!
                    </h1>
                    <p style="color: #999; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                        Thanks for signing up for H1Grow. You've taken the first step towards monetizing your content with personalized software products.
                    </p>
                    <div style="background: #111; border: 2px solid #333; padding: 24px; margin-bottom: 24px;">
                        <p style="color: #C0C0C0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                            What happens next?
                        </p>
                        <p style="color: #999; font-size: 15px; line-height: 1.6;">
                            Our team will review your profile and reach out within <strong style="color: #fff;">24 hours</strong> to set up your discovery call.
                        </p>
                    </div>
                    <p style="color: #666; font-size: 13px;">
                        — The H1Grow Team
                    </p>
                </div>
            `,
        });

        // 2. Send notification email to the site owner
        await resend.emails.send({
            from: `H1Grow Leads <noreply@${process.env.FROM_DOMAIN || "resend.dev"}>`,
            to: [process.env.OWNER_EMAIL!],
            subject: `🔔 New Lead: ${name} (@${instagram})`,
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
                    <h2 style="margin-bottom: 24px;">New H1Grow Lead 🎉</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Instagram</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="https://instagram.com/${instagram.replace('@', '')}">@${instagram.replace('@', '')}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; font-weight: bold;">Followers</td>
                            <td style="padding: 12px;">${followers}</td>
                        </tr>
                    </table>
                    <p style="margin-top: 24px; color: #666; font-size: 13px;">
                        Submitted at ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { error: "Failed to process submission. Please try again." },
            { status: 500 }
        );
    }
}
