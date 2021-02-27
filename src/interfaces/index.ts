export type Article = {
  id: number
  date: string
  place: string
  time: string
  price: string
  guest: string
  image: string
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
