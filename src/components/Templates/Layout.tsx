import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Header from '../Organisms/Header'
import Footer from '../Organisms/Footer'
import { GA_TRACKING_ID } from '../../../utils/gtag'
import { useRouter } from 'next/router'
import * as gtag from '../../../utils/gtag'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Souvenir' }: Props) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <html lang="ja">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
        <meta
          property="og:url"
          content="https://souvenir-official.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://souvenir-official.vercel.app/ogp.jpg"
        />
        <meta property="og:site_name" content="Souvenir official website" />
        <meta
          property="og:description"
          content="都内を中心に活動中のバンド、Souvenir の公式サイト。"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Souvenircb" />
      </Head>
      <div
        className="relative tracking-widest bg-gray-50"
        style={{ minHeight: '100vh' }}>
        <Header />
        {children}
        <Footer />
      </div>
    </html>
  )
}

export default Layout
