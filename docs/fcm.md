## Firebase cloud messaging
- Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.
- Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4000 bytes to a client app.



## REGISTRATION TOKEN
- A registration token is a unique identifier generated for a customer for the purpose of authentication.
- Generated using getToken method
-  Using FCM, you can send data payloads (via a message) to a device for a specific application. Each message can transfer a payload of up to 4KB to a client.
- By default, the FCM SDK generates a registration token for the client app instance on initial startup of your app. Similar to the APNs device token, this token allows you to target notification messages to this particular instance of the app.
- uniquely identify an instance of an app. They are globally unique.
- The registration token may change whe FOR IOS
   1. The app is restored on a new device
   2. The user uninstalls/reinstall the app
   3. The user clears app data.
- The registration token may change whe FOR andriod
   1. The app deletes Instance ID
   2. The app is restored on a new device
   3. The user uninstalls/reinstall the app
   4. The user clears app data.

- if you create 2 app with two different firebase configs but you request the token from the same device, the service will give you two different tokens.

## Vapid Key 
- Voluntary Application Server Identification
- Cloud messaging > Web Push certificates tab >  Generate Key Pair. 


## References
- https://www.techotopia.com/index.php/Sending_Firebase_Cloud_Messages_from_a_Node.js_Server
- https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart
- https://metacognitive.me/implementing-push-notifications-with-firebase/
- Based on https://firebase.google.com/docs/cloud-messaging/js/client
- https://firebase.google.com/docs/cloud-messaging/concept-options#credentials
- https://firebase.google.com/docs/cloud-messaging/manage-tokens
- https://notifee.app/react-native/docs/integrations/fcm

```
 const res = await getMessaging().send({
            android: {
               notification: {
                  icon: '',
               },
            },
            webpush: {
               notification: {
                  ...msg,
                  icon: 'https://test.com/favicon.png',
                  requireInteraction: msg.requireInteraction ?? false,
                  actions: [
                     {
                        title: 'Open',
                        action: 'open',
                     },
                  ],
                  data: {
                     link: msg.link,
                  },
               },
            },
            token: fcmRegistrationToken,
            fcmOptions: {},
         })
         return res
```