/* eslint-disable no-console */
import React, { useEffect, FC, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { config } from '../../utils'

const LoginPage: FC = () => {
  const [user, setUser] = useState<any>(null)

  const handleCallbackResponse = response => {
    console.log('Encoded JWT ID Token: ', response?.credential)
    const googleUser = jwt_decode(response.credential)
    console.log('GOOGLE USER: ', googleUser)
    setUser(googleUser)
    document.getElementById('signInDiv')!.hidden = true
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

    // For google One tap login
    google?.accounts?.id.prompt()
  }, [])

  const handleSignout = () => {
    setUser(null)
    document.getElementById('signInDiv')!.hidden = false
  }

  return (
    <div>
      <div id="signInDiv" />
      {user && Object?.keys(user)?.length != 0 && (
        <button onClick={handleSignout}>SignOut</button>
      )}
      {user && (
        <div>
          <img src={user.picture} alt="google" />
          <h4>{user.name}</h4>
        </div>
      )}
    </div>
  )
}

export default LoginPage
