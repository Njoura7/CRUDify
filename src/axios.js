import axios from 'axios'

export default axios.create({
  baseURL: 'https://localhost:32769/api/User',
  headers: { 'Content-Type': 'application/json' },
})
