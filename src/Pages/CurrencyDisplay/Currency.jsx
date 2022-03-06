import React, { useEffect, useState } from 'react'
import { GetCurrencies, GetCurrenciesSorted } from '../../Axios/ApiCalls'
import Cycard from './CurrencyCard/Cycard'

export default function Currency () {
  const [cryptoData, setCryptodata] = useState([])
  const [flag, setFlag] = useState(false)
  const getData = async () => {
    setCryptodata(await GetCurrencies('', false))
  }
  const getDataSorted = async element => {
    console.log(flag)
    setFlag(!flag)
    console.log(flag)
    await GetCurrenciesSorted(element, flag)
  }

  return (
    <div className=' mb-auto flex flex-col items-center'>
      <h1 className='text-bold text-lg md:text-3xl text-white mt-5'>
        Cryptocurrency list
      </h1>
      <button
        type='button'
        className='text-white bg-green-700 w-20 rounded-3xl mt-2 mb-2'
        onClick={getData}
      >
        GETDATA
      </button>
      <div className='w-2/3 text-white bg-black bg-opacity-70 p-2 rounded-lg grid grid-cols-6 hover:cursor-pointer'>
        <div
          className='ml-6 hover:text-yellow-200 '
          onClick={() => getDataSorted('name')}
        >
          NAME
        </div>
        <div
          className='ml-10 hover:text-yellow-200 '
          onClick={() => getDataSorted('current_price')}
        >
          PRICE
        </div>
        <div
          className='hover:text-yellow-200 '
          onClick={() => getDataSorted('market_cap_change_percentage_24h')}
        >
          24H CHANGE
        </div>
        <div
          className='hover:text-yellow-200'
          onClick={() => getDataSorted('market_cap')}
        >
          MARKETCAP
        </div>
        <div
          className='hover:text-yellow-200 '
          onClick={() => getDataSorted('total_volume')}
        >
          VOLUME 24H
        </div>
        <div
          className='hover:text-yellow-200 '
          onClick={() => getDataSorted('total_supply')}
        >
          MAX SUPPLY
        </div>
      </div>
      <ul className='w-2/3 h-screen/1 md:h-screen/0 flex mt-3 justify-center grid grid-cols-1 overflow-y-scroll scrollbar-hide'>
        {cryptoData.map((element, index) => {
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

/**
 *
 */
