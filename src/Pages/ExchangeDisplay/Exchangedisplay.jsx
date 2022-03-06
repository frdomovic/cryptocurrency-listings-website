import React, { useEffect, useState } from 'react'
import { ExchangesCall } from '../../Axios/ApiCalls'
import Excard from './ExchangeCard/Excard'
export default function Exchangedisplay () {
  const [exchangesData, setExchangesData] = useState([])
  const getData = async () => {
    setExchangesData(await ExchangesCall())
  }

  return (
    <div className=' mb-auto flex flex-col items-center'>
      <h1 className='text-bold text-lg md:text-3xl text-white mt-5'>
        Cryptocurrency Exchanges list
      </h1>
      <button
        type='button'
        className='text-white bg-green-700 w-20 rounded-3xl mt-5'
        onClick={getData}
      >
        GETDATA
      </button>

      <ul className='w-2/3 h-screen/1 md:h-screen/0 flex mt-10 justify-center grid grid-cols-1 lg:grid-cols-3 overflow-y-scroll scrollbar-hide'>
        {exchangesData.map((element, index) => (
          <Excard
            key={index}
            name={element.name}
            url={element.url}
            country={element.country}
            trade={element.trade_volume_24h_btc}
            rank={element.trust_score_rank}
            year={element.year_established}
            image={element.image}
          />
        ))}
      </ul>
    </div>
  )
}
