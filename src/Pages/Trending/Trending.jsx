import React, { useState } from 'react'
import { GetTrending } from '../../Axios/ApiCalls'
import Tgcard from './TrendingCard/Tgcard'

export default function Trending () {
  const [trendingCoins, setTrendingCoins] = useState([])

  const trending = async () => {
    setTrendingCoins(await GetTrending())
  }
  return (
    <div className=' mb-auto flex flex-col items-center'>
      <h1 className='text-bold text-lg md:text-3xl text-white mt-5'>
        Trending coins!
      </h1>
      <button
        type='button'
        className='text-white bg-green-700 w-20 rounded-3xl mt-5'
        onClick={trending}
      >
        GETDATA
      </button>

      <ul className='w-2/3 h-screen/1 md:h-screen/0 flex mt-10 justify-center grid grid-cols-1 lg:grid-cols-3 overflow-y-scroll scrollbar-hide'>
        {trendingCoins.map((element, index) => {
          return (
            <Tgcard
              key={index}
              name={element.item.name}
              image={element.item.small}
              id={element.item.coin_id}
              symbol={element.item.symbol}
              marketcap={element.item.market_cap_rank}
              price={element.item.price_btc}
            />
          )
        })}
      </ul>
    </div>
  )
}
