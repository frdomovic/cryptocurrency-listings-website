import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  fetchCryptoCurrency,
  fetchSortedCrypto
} from '../../Redux/API/apiActions'
import Cycard from './CurrencyCard/Cycard'

function Currency ({ CryptoData, fetchCryptoCurrency, fetchSortedCrypto }) {
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    fetchCryptoCurrency()
  }, [])
  const getDataSorted = async element => {
    fetchSortedCrypto(element, flag)
    setFlag(!flag)
  }

  return (
    <div className=' mb-auto flex flex-col items-center'>
      <h1 className='mt-5 mb-2 text-white text-bold text-lg md:text-3xl '>
        Cryptocurrency List
      </h1>
      <div className='w-2/3 p-2 rounded-lg grid grid-cols-3 md:grid-cols-6 text-white bg-black bg-opacity-70 hover:cursor-pointer'>
        <div
          className='mt-3 ml-3  md:mt-0 md:ml-6 hover:text-yellow-200 '
          onClick={() => getDataSorted('name')}
        >
          NAME
        </div>
        <div
          className='mt-3 text-center md:mt-0 md:ml-10 md:text-justify hover:text-yellow-200 '
          onClick={() => getDataSorted('current_price')}
        >
          PRICE
        </div>
        <div
          className='text-center md:text-justify hover:text-yellow-200  '
          onClick={() => getDataSorted('market_cap_change_percentage_24h')}
        >
          24H CHANGE
        </div>
        <div
          className='hidden md:block hover:text-yellow-200 '
          onClick={() => getDataSorted('market_cap')}
        >
          MARKETCAP
        </div>
        <div
          className='hidden md:block hover:text-yellow-200 '
          onClick={() => getDataSorted('total_volume')}
        >
          VOLUME 24H
        </div>
        <div
          className='hidden md:block hover:text-yellow-200 '
          onClick={() => getDataSorted('total_supply')}
        >
          MAX SUPPLY
        </div>
      </div>
      <ul className='w-2/3 h-screen/1 mt-3 flex justify-center grid grid-cols-1 overflow-y-scroll scrollbar-hide md:h-screen/0 '>
        {CryptoData.cryptocurrencies &&
          CryptoData.cryptocurrencies.map((element, index) => {
            return (
              <Cycard
                key={index}
                id={element.id}
                name={element.name}
                symbol={element.symbol}
                image={element.image}
                price={element.current_price}
                marketcap={element.market_cap}
                volume={element.total_volume}
                change={element.market_cap_change_percentage_24h}
                supply={element.total_supply}
              />
            )
          })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    CryptoData: state.storedData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCryptoCurrency: () => dispatch(fetchCryptoCurrency()),
    fetchSortedCrypto: (value, flag) => dispatch(fetchSortedCrypto(value, flag))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Currency)
