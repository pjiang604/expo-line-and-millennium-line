import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Millennium and Expo Line Map</title>
        <meta name='author' content='Patricia Jiang' />
        <meta name='description' content='Interactive skytrain map' />
      </Head>
      <Component {...pageProps} />
    </>

  )
}
