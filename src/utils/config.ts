export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  },
  google: {
    clientID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
}
