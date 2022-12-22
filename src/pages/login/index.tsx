/* eslint-disable no-console */
import React, { useEffect, FC } from 'react'
import jwt_decode from 'jwt-decode'
import { config } from '../../utils'

const LoginPage: FC = () => {
  const handleCallbackResponse = response => {
    console.log('Encoded JWT ID Token: ', response?.credential)
    const googleUser = jwt_decode(response.credential)
    console.log('GOOGLE USER: ', googleUser)
  }

  useEffect(() => {
    // This will remove the lint UNDEFINED error
    /*
     * global google
     */
    console.log('window google onject =>', google)

    google?.accounts?.id.initialize({
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
