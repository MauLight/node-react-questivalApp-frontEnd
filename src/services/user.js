import axios from 'axios'
const baseUrl = 'https://questivalapp-node-backend-together.onrender.com/api/users'
// const baseUrl = 'http://localhost:3001/api/users'

export const getUser = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}

export const postUser = async (userObj) => {
  const { data } = await axios.post(baseUrl, userObj)
  return data
}

export const askResetPassword = async (passObj) => {
  const { data } = await axios.post(`${baseUrl}/passwordReset`, passObj)
  return data
}
export const resetPassword = async (passObj) => {
  const { data } = await axios.post(`${baseUrl}/newPassword`, passObj)
  return data
}

export const updateUser = async (id, updateObj) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, updateObj)
  return data
}