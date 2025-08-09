import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 15000,
})

apiClient.interceptors.request.use((config) => {
  return config
})

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error)
  }
)


