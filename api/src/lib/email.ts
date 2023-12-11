import * as nodemailer from 'nodemailer'

interface Options {
  to: string | string[]
  subject: string
  text: string
  html: string
}

export async function sendEmail({ to, subject, text, html }: Options) {
  console.log('Sending email to:', to)

  // create reusable transporter object using SendInBlue for SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, //true for 465, false for other ports
    auth: {
      user: 'imadahmed101@gmail.com',
      pass: process.env.SEND_IN_BLUE_KEY,
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Imad Ahmed" <imadahmed101@gmail.com>',
    to: Array.isArray(to) ? to : [to], //list of receivers
    subject, //subject line
    text, //plain text body
    html, //html body
  })

  return info
}