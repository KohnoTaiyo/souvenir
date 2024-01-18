export type LiveData = {
  contents: Article[],
  limit?: number,
  offset?: number,
  totalCount: number
}

export type Article = {
  id: string
  title: string
  date: string
  place: string
  time: string
  price: string
  guest: string
  image: { width: number; height: number; url: string }
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
  reserveUrl?: string
}

export type ProcessEnv = {
  [key: string]: string | undefined
}
