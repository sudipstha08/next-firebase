import React, { useState } from 'react'

const GoogleCalendar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY

  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function initClient() {
    document['gapi']?.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          document['gapi']?.auth2.getAuthInstance().isSignedIn.listen()

          // Handle the initial sign-in state.
          setIsSignedIn(
            document['gapi']?.auth2.getAuthInstance().isSignedIn.get(),
          )
          listUpcomingEvents()
          // authorizeButton.onclick = handleAuthClick
          // signoutButton.onclick = handleSignoutClick
        },
        function (error) {
          appendPre(JSON.stringify(error, null, 2))
        },
      )
  }

  function listUpcomingEvents() {
    document['gapi'].client.calendar.events
      .list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      })
      .then(function (response) {
        const events = response.result.items
        appendPre('Upcoming events:')

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            const event = events[i]
            let when = event.start.dateTime
            if (!when) {
              when = event.start.date
            }
            appendPre(event.summary + ' (' + when + ')')
          }
        } else {
          appendPre('No upcoming events found.')
        }
      })
  }

  const handleAuthClick = () => {
    document['gapi']?.auth2.getAuthInstance().signIn()
  }
  const handleSignOutClick = () => {
    document['gapi']?.auth2.getAuthInstance().signOut()
  }

  function appendPre(message) {
    const pre = document?.getElementById('content')
    const textContent = document?.createTextNode(message + '\n')
    pre!.appendChild(textContent)
  }

  React.useEffect(() => {
    initClient()
  }, [])

  return (
    <div>
      <button
        onClick={handleAuthClick}
        style={{ display: isSignedIn ? 'none' : 'block' }}
      >
        Handle Auth
      </button>
      <button
        onClick={handleSignOutClick}
        style={{ display: isSignedIn ? 'block' : 'none' }}
      >
        Handle Sign out
      </button>
      <pre id="content" style={{ whiteSpace: 'pre-wrap' }}></pre>
    </div>
  )
}

export default GoogleCalendar
