import React, { useEffect, FC } from 'react'
import { config } from '../../utils'

const LoginPage: FC = () => {
  const handleCallbackResponse = response => {
    // eslint-disable-next-line no-console
    console.log('Encoded JWT ID Token: ', response?.credential)
  }

  useEffect(() => {
    /*
     * global google
     */
    google.accounts.id.initiaize({
      client_id: config.google.clientID,
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    })
  }, [])

  return (
    <div>
      <div id="signInDIv"></div>
    </div>
  )
}

export default LoginPage
