import axios from 'axios'
import { BASE_API_URL } from '../Helpers/constants'

export const ExchangesCall = async () => {
  let response
  await axios
    .get(BASE_API_URL + 'exchanges?per_page=100')
    .then(res => {
      response = res.data
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return response
}

export const PingApi = async () => {
  let response
  await axios
    .get(BASE_API_URL + 'ping')
    .then(res => {
      //console.log(JSON.stringify(res.data))
      response = res.data
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return response
}

export const GetCurrencies = async () => {
  let response
  await axios
    .get(
      BASE_API_URL +
        'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    .then(res => {
      response = res.data
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return response
}
export const GetCurrenciesSorted = async (sortValue, flag) => {
  console.log('tu sam')
  console.log('sort: ', sortValue)
  let response
  await axios
    .get(
      BASE_API_URL +
        'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    .then(res => {
      if (sortValue) {
        if (flag) {
          response = res.data.sort((a, b) => b.sortValue - a.sortValue)
          console.log('jedan')
          console.log(response)
        } else {
          response = res.data.sort((a, b) => a.sortValue - b.sortValue)
          console.log('jedan dva')
          console.log(response)
        }
      } else {
        response = res.coins
      }
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return response
}

export const GetTrending = async () => {
  let response
  await axios
    .get(BASE_API_URL + '/search/trending')
    .then(res => {
      response = res.data.coins
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return response
}

export const GetMoreCoinInfo = async id => {
  let response
  await axios
    .get(BASE_API_URL + 'coins/' + id)
    .then(res => {
      response = res.data
    })
    .catch(error => {
      console.log('ExchangeAPI error:', error)
    })
  return [
    response.name,
    response.symbol,
    response.hashing_alogirthm,
    response.block_time_in_minutes,
    response.image.large,
    response.genesis_data,
    response.description.en
  ]
}
