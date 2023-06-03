const sgMail = require('@sendgrid/mail')

export default async function (req) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_KEY)
  const { message } = req.body

  const content = {
    to: process.env.NEXT_PUBLIC_MAIL_NAME,
    from: process.env.NEXT_PUBLIC_MAIL_NAME,
    subject: `HPから${message.inquire}が届きました`,
    html: `
    <p>内容：${message.inquire}</p>
    <p>名前：${message.name}</p>
    <p>フリガナ：${message.kana}</p>
    <p>メール：${message.email}</p>
    <br>
    <p>${message.text.replace(/\n/g, '<br />')}</p>`,
  }

  try {
    await sgMail.send(content)
  } catch (e) {
    console.log(e)
  }
}
