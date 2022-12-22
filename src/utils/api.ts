import axios, { AxiosInstance } from 'axios'
import { config } from './config'

export const API: AxiosInstance = axios.create({
  baseURL: config.apiUrl,
})
