/* eslint-disable no-console */
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import { getToken } from 'firebase/messaging'
import { useEffect } from 'react'
import { messaging } from '../utils/firebase'

const queryClient = new QueryClient({ defaultOptions: {} })

function MyApp({ Component, pageProps }: AppProps) {
  const getTokens = async () => {
    getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    })
      .then((currentToken: any) => {
        if (currentToken) {
          console.log('toekn', currentToken)
          // Send the token to your server and update the UI if necessary
        } else {
          // Show permission request UI
          console.log(
            'No registration token available. Request permission to generate one.',
          )
        }
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err)
      })
  }

  useEffect(() => {
    getTokens()
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
