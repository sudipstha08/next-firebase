/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: '454395181950',
git })

const initMessaging = firebase.messaging()

// Not necessary, but if you want to handle clicks on notifications
self.addEventListener('notificationclick', event => {
  event.notification.close()

  const pathname = event.notification?.data?.FCM_MSG?.notification?.data?.link
  if (!pathname) return
  const url = new URL(pathname, self.location.origin).href

  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientsArr => {
        const hadWindowToFocus = clientsArr.some(windowClient =>
          windowClient.url === url ? (windowClient.focus(), true) : false,
        )

        if (!hadWindowToFocus)
          self.clients
            .openWindow(url)
            .then(windowClient => (windowClient ? windowClient.focus() : null))
      }),
  )
})
