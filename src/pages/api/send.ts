import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const resend = new Resend(process.env.NEXT_PUBLIC_MAIL_KEY)
    const { message } = req.body
    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: `${process.env.NEXT_PUBLIC_MAIL_NAME}`,
      subject: `HPから${message.inquire}が届きました`,
      html: `
      <p>内容：${message.inquire}</p>
      <p>名前：${message.name}</p>
      <p>フリガナ：${message.kana}</p>
      <p>メール：${message.email}</p>
      <br>
      <p>${message.text.replace(/\n/g, '<br />')}</p>
      `,
    })
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
}
