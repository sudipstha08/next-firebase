## Firebase cloud messaging



## REGISTRATION TOKEN
- A registration token is a unique identifier generated for a customer for the purpose of authentication.
- Generated using getToken method
-  Using FCM, you can send data payloads (via a message) to a device for a specific application. Each message can transfer a payload of up to 4KB to a client.
- By default, the FCM SDK generates a registration token for the client app instance on initial startup of your app. Similar to the APNs device token, this token allows you to target notification messages to this particular instance of the app.

## Vapid Key 
- Voluntary Application Server Identification
- Cloud messaging > Web Push certificates tab >  Generate Key Pair. 


## References
- https://www.techotopia.com/index.php/Sending_Firebase_Cloud_Messages_from_a_Node.js_Server
- https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart
- https://metacognitive.me/implementing-push-notifications-with-firebase/
- Based on https://firebase.google.com/docs/cloud-messaging/js/client