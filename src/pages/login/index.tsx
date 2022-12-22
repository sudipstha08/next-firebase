import React, { useEffect, FC } from 'react'
import { config } from '../../utils'

const LoginPage: FC = () => {
  const handleCallbackResponse = response => {
    // eslint-disable-next-line no-console
    console.log('Encoded JWT ID Token: ', response?.credential)
  }

  useEffect(() => {
    // This will remove the lint UNDEFINED error
    /*
     * global google
     */
    // eslint-disable-next-line no-console
    console.log('doducmm =>', window?.['google'])

    window?.['google']?.accounts?.id.initialize({
      client_id: config.google.clientID,
      callback: handleCallbackResponse,
    })

    window?.['google']?.accounts?.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        size: 'large',
      },
    )
  }, [])

  return (
    <div>
      <div id="signInDiv" />
    </div>
  )
}

export default LoginPage
