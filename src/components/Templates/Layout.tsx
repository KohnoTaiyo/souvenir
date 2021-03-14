import React, { ReactNode } from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Header from '../Organisms/Header'
import Footer from '../Organisms/Footer'
// import '../../styles/Layout.module.css'

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
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
