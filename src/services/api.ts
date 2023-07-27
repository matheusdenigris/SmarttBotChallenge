import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.k8s.smarttbot.com/api-front-test/api/v1',
})
