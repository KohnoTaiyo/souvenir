const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_KEY)

  const { message } = req.body

  const content = {
    to: 'taiyowork66@gmail.com',
    from: 'taiyowork66@gmail.com',
    subject: `HPから${message.inquire}が届きました`,
    html: `
    <p>内容：${message.inquire}</p>
    <p>名前：${message.name}</p>
    <p>フリガナ：${message.kana}</p>
    <p>メール：${message.email}</p>
    <br>
    <p>${message.text}</p>`,
  }
  sgMail
    .send(content)
    .then(() => console.log(content))
    .catch(() => console.log('error'))
}
