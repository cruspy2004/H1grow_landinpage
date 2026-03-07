import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Send notification to site owner with the contact message
        await resend.emails.send({
            from: `H1Grow Contact <noreply@${process.env.FROM_DOMAIN || "resend.dev"}>`,
            to: [process.env.OWNER_EMAIL!],
            replyTo: email,
            subject: `📩 Contact Form: ${name}`,
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
                    <h2 style="margin-bottom: 24px;">New Contact Message 📩</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">Name</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                    </table>
                    <div style="margin-top: 24px; padding: 20px; background: #f9f9f9; border-left: 4px solid #333;">
                        <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    <p style="margin-top: 24px; color: #666; font-size: 13px;">
                        Submitted at ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}
                    </p>
                    <p style="color: #999; font-size: 12px; margin-top: 8px;">
                        Reply directly to this email to respond to ${name}.
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
