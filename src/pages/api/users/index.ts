import { NextApiRequest, NextApiResponse } from 'next'
import { sampleArticles } from '../../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleArticles)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleArticles)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
