import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const formData: FormData = await req.formData();

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // As an example, Gmail. For production use, select an appropriate SMTP server.
        auth: {
            user: process.env.SMPT_USER, // Environment variable for Gmail username
            pass: process.env.SMPT_PASSWORD, // Environment variable for Gmail password
        },
    });

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const mailOptions = {
        from: email, // sender address from the form input
        to: 'ilare27t@gmail.com', // who you want to send emails to
        subject: `New Contact from ${name}`, // Subject line
        text: `You have a new contact from:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // plain text body
    };


    //@ts-ignore
    try {
        await new Promise<void>((resolve, reject) => {
            // @ts-ignore
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.error('Error sending mail: ', err);
                    reject(err);
                } else {
                    console.log('Mail sent:', info.response);
                    resolve();
                }
            });
        });
        return NextResponse.json({ message: 'Mail sent'}, { status: 200 }); // Возвращаем успешный статус только после успешной отправки письма
    } catch (error) {
        console.error('Error sending mail: ', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
