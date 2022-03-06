import axios from 'axios'
import { BASE_API_URL } from '../Helpers/constants'
//FUNCTION FOR PINGING COINGECKO API TO SEE IF ITS UP AND RUNNING
export const PingApi = async () => {
  let response
  await axios
    .get(BASE_API_URL + 'ping')
    .then(res => {
      response = res.data
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return response
}
