import {
  //   AndroidConfig,
  //   WebpushConfig,
  //   ApnsConfig,
  FcmOptions,
} from 'firebase/messaging'

export interface Message {
  title: string
  body: string
  requireInteraction?: boolean
  link?: string
}

export interface BaseMessage {
  data?: {
    [key: string]: string
  }
  notification?: Notification
  //   android?: AndroidConfig
  //   webpush?: WebpushConfig
  //   apns?: ApnsConfig
  fcmOptions?: FcmOptions
}
