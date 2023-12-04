import axios from 'axios'
const baseUrl = 'https://questivalapp-node-backend-together.onrender.com/api/login'
// const baseUrl = 'http://localhost:3001/api/login'

export const logUser = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}