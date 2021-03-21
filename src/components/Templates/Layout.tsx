import React, { ReactNode } from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Header from '../Organisms/Header'
import Footer from '../Organisms/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Souvenir' }: Props) => (
  <div
    className="relative tracking-widest bg-gray-50"
    style={{ minHeight: '100vh' }}>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon-180x180.png"
      />
      <link rel="icon" type="image/png" href="/favicons/icon-192x192.png" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="都内を中心に活動中のバンド、Souvenir の公式サイト。"
      />
      <meta name="keywords" content="バンド, 都内, 東京, Souvenir, 3ピース" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Souvenir official website" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://souvenir-official.vercel.app/" />
      <meta
        property="og:image"
        content="https://souvenir-official.vercel.app/assets/ogp.jpg"
      />
      <meta property="og:site_name" content="Souvenir official website" />
      <meta
        property="og:description"
        content="都内を中心に活動中のバンド、Souvenir の公式サイト。"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Souvenircb" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
