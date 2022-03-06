import axios from 'axios'
import { BASE_API_URL } from '../../Helpers/constants'
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_CRYPTOCURRENCIES_SUCCESS,
  FETCH_TRENDING_SUCCESS,
  FETCH_MORE_COIN_INFO
} from './apiTypes'
//EXCHANGES LIST API CALLS AND FUNCTIONS
const fetchRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

const fetchExchangesSuccess = exchdata => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: exchdata
  }
}

const fetchFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}

export const fetchExchanges = () => {
  return dispatch => {
    dispatch(fetchRequest())
    axios
      .get(BASE_API_URL + 'exchanges?per_page=100')
      .then(res => {
        dispatch(fetchExchangesSuccess(res.data))
      })
      .catch(error => {
        console.log('API error:', error)
        dispatch(fetchFailure(error))
      })
  }
}
//CRYPTOCURRENCY API CALLS AND FUNCTIONS
const fetchCryptoCurrencySuccess = cryptodata => {
  return {
    type: FETCH_CRYPTOCURRENCIES_SUCCESS,
    payload: cryptodata
  }
}

export const fetchCryptoCurrency = () => {
  return dispatch => {
    dispatch(fetchRequest())
    axios
      .get(
        BASE_API_URL +
          'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        dispatch(fetchCryptoCurrencySuccess(res.data))
      })
      .catch(error => {
        console.log('API error:', error)
        dispatch(fetchFailure(error))
      })
  }
}
export const fetchSortedCrypto = (sortOption, flag) => {
  return dispatch => {
    dispatch(fetchRequest())
    axios
      .get(
        BASE_API_URL +
          'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        const cryptodata = res.data
        if (flag) {
          cryptodata.sort((a, b) => a[sortOption] - b[sortOption])
          dispatch(fetchCryptoCurrencySuccess(cryptodata))
        } else {
          cryptodata.sort((a, b) => b[sortOption] - a[sortOption])

          dispatch(fetchCryptoCurrencySuccess(cryptodata))
        }
      })
      .catch(error => {
        console.log('API error:', error)
        dispatch(fetchFailure(error))
      })
  }
}
//TRENDING COINS API CALLS AND FUNCTIONS
const fetchTrendingSuccess = trending => {
  return {
    type: FETCH_TRENDING_SUCCESS,
    payload: trending
  }
}
export const fetchTrending = () => {
  return dispatch => {
    dispatch(fetchRequest())
    axios
      .get(BASE_API_URL + 'search/trending')
      .then(res => {
        dispatch(fetchTrendingSuccess(res.data.coins))
      })
      .catch(error => {
        console.log('API error:', error)
        dispatch(fetchFailure(error))
      })
  }
}
//FETCHING API TO GET MORE INFO ABOUT CERTAIN CRYPTO-COIN
const fetchMoreCoinInfoSuccess = coininfo => {
  return {
    type: FETCH_MORE_COIN_INFO,
    payload: coininfo
  }
}

export const fetchMoreCoinInfo = id => {
  return dispatch => {
    dispatch(fetchRequest())
    axios
      .get(BASE_API_URL + 'coins/' + id)
      .then(res => {
        let moreinfo = [
          res.data.name,
          res.data.symbol,
          res.data.hashing_alogirthm,
          res.data.block_time_in_minutes,
          res.data.image.large,
          res.data.genesis_data,
          res.data.description.en
        ]
        dispatch(fetchMoreCoinInfoSuccess(moreinfo))
      })
      .catch(error => {
        console.log('API error:', error)
        dispatch(fetchFailure(error))
      })
  }
}
