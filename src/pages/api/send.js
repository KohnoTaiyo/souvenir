const sgMail = require('@sendgrid/mail')

export default async function (req) {
  console.log('key before')
  sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_KEY)
  console.log('key ok')

  const { message } = req.body

  const content = {
    to: 'souvenir2020jp@gmail.com',
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
  console.log('before send')
  sgMail
    .send(content)
    .then(() => console.log(content))
    .catch(() => console.log('error'))
  console.log('finish')
}
