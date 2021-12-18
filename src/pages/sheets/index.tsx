/* eslint-disable no-console */
import React from 'react'

const GoogleSheets = () => {
  const authenticate = async () => {
    await window?.['gapi'].auth2
      .getAuthInstance()
      .signIn({
        scope:
          'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets',
      })
      .then(
        function () {
          console.log('Sign-in successful')
        },
        function (err) {
          console.error('Error signing in', err)
        },
      )

    loadClient()
  }
  function loadClient() {
    window?.['gapi'].client.setApiKey('YOUR_API_KEY')
    return window?.['gapi'].client
      .load('https://sheets.googleapis.com/$discovery/rest?version=v4')
      .then(
        function () {
          console.log('GAPI client loaded for API')
        },
        function (err) {
          console.error('Error loading GAPI client for API', err)
        },
      )
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return window['gapi'].client.sheets.spreadsheets
      .create({
        resource: {},
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log('Response', response)
        },
        function (err) {
          console.error('Execute error', err)
        },
      )
  }
  window?.['gapi'].load('client:auth2', function () {
    window?.['gapi'].auth2.init({ client_id: 'YOUR_CLIENT_ID' })
  })
  return (
    <div>
      <button onClick={authenticate}>Authorize and load </button>
      <button onClick={execute}>execute</button>
    </div>
  )
}

export default GoogleSheets
