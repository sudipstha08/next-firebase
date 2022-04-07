/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * A service worker is a script that your browser runs in the background,
 * separate from the web page, enabling features that do not require a
 * web page or user interaction.
 *
 * To receive the onMessage event, your app needs a service worker. By default,
 *  when you start Firebase,
 * it looks for a file called firebase-messaging-sw.js.
 */
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: '454395181950',
})

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

initMessaging.onBackgroundMessage(function (payload) {
  console.log('Received background message', payload)

  const notificationTitle = payload.notification.notificationTitle
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/img.png',
  }
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  )
})
