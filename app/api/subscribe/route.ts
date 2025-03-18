import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { email } = await request.json()

  // Commented out for preview purposes
  /*
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // Replace with your admin email
    subject: "New Waste Management Subscription",
    text: `A new user has subscribed to waste management updates:\n\nEmail: ${email}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Subscription successful" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
  */

  // Mock success response for preview
  console.log("Subscription would be processed for:", email)
  return NextResponse.json({ message: "Subscription successful (Preview mode)" })
}

