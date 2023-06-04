import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend('re_HbBuzSUT_37Ugv4ynfa8kkkXYcquwTzMs')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { message } = req.body
    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'taiyowork66@gmail.com',
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
