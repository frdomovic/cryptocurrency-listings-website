import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_CRYPTOCURRENCIES_SUCCESS,
  FETCH_TRENDING_SUCCESS,
  FETCH_MORE_COIN_INFO
} from './apiTypes'

const initialstate = {
  loading: false,
  exchanges: [],
  cryptocurrencies: [],
  trendings: [],
  coininfo: [],
  error: ''
}

const apiReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        exchanges: action.payload,
        error: ''
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        exchanges: [],
        error: action.payload
      }
    case FETCH_CRYPTOCURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptocurrencies: action.payload,
        error: ''
      }
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        trendings: action.payload,
        error: ''
      }
    case FETCH_MORE_COIN_INFO:
      return {
        ...state,
        loading: false,
        coininfo: action.payload,
        error: ''
      }
    default:
      return state
  }
}

export default apiReducer
