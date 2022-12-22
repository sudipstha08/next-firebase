/* eslint-disable no-console */
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'
import 'antd/dist/antd.css'
import '../styles/globals.css'

// 1. Import the extendTheme function
// import { getToken } from 'firebase/messaging'
// import { useEffect } from 'react'
// import { messaging } from '../utils/firebase'

const queryClient = new QueryClient({ defaultOptions: {} })

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  // const getTokens = async () => {
  //   await messaging.requestPermission()
  //   await getToken(messaging, {
  //     vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  //   })
  //     .then((currentToken: any) => {
  //       if (currentToken) {
  //         console.log('toekn', currentToken)
  //         // Send the token to your server and update the UI if necessary
  //       } else {
  //         // Show permission request UI
  //         console.log(
  //           'No registration token available. Request permission to generate one.',
  //         )
  //       }
  //     })
  //     .catch(err => {
  //       console.log('An error occurred while retrieving token. ', err)
  //     })
  // }

  // useEffect(() => {
  //   getTokens()
  // }, [])

  return (
    <>
      <Head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
