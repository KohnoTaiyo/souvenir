import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Header from '../Organisms/Header'
import styles from '../../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Souvenir' }: Props) => (
  <div className="relative">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <header className="z-50"> */}
    {/* <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav> */}
    {/* <MainVisual /> */}
    {/* </header> */}
    <Header />
    {children}
    <footer>
      <hr />
      <div className={styles.test}>I'm here to stay (Footer)</div>
    </footer>
  </div>
)

export default Layout
