export type Article = {
  id: number
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
}

export type Inputs = {
  name: string
  email: string
  text: string
  inquire: string
  kana: string
}

export type ProcessEnv = {
  [key: string]: string | undefined
}
