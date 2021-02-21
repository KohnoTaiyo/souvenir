import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Header from '../Organisms/Header'
// import styles from '../../styles/Layout.module.css'
import Footer from '../Organisms/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Souvenir' }: Props) => (
  <div className="relative tracking-widest">
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
