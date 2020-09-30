import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href=""/>
        <link rel="apple-touch-icon" href=""/>
        <link rel="manifest" href="../../public/manifest.json" />
        <meta name="description"
              content="A simple project to work with TypeScript, React,
              NextJS and Styled Components"/>
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default App
