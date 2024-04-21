import {NextRequest, NextResponse} from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        // @ts-ignore
        const formData = await req.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // As an example, Gmail. For production use, select an appropriate SMTP server.
            auth: {
                user: process.env.SMPT_USER, // Environment variable for Gmail username
                pass: process.env.SMPT_PASSWORD, // Environment variable for Gmail password
            },
        });

        // Set up email data (what gets sent)
        const mailOptions = {
            from: email, // sender address from the form input
            to: 'ilare27t@gmail.com', // who you want to send emails to
            subject: `New Contact from ${name}`, // Subject line
            text: `You have a new contact from:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // plain text body
        };

        // Send the email
        // @ts-ignore
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.error('Error sending mail: ', err);
                return NextResponse.json({ message: 'Error sending mail', error: err }, { status: 500 });
            } else {
                console.log('Mail sent:', info.response);
                return NextResponse.json({ message: 'Error sending mail'}, { status: 500 });
            }
        });

        return NextResponse.json({ message: "Success" }, { status: 200 })
    } else {
        return NextResponse.json({ message: "only post" }) //todo headers only post
    }
}
