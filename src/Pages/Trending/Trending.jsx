import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTrending } from '../../Redux/API/apiActions'
import Tgcard from './TrendingCard/Tgcard'

function Trending ({ trendingdata, fetchTrending }) {
  useEffect(() => {
    fetchTrending()
  }, [])
  return (
    <div className=' mb-auto flex flex-col items-center'>
      <h1 className='mt-5 mb-3 text-bold text-lg text-white md:text-3xl '>
        Trending coins!
      </h1>
      <ul className='w-2/3 h-screen/1 mt-10 flex grid grid-cols-1 justify-center overflow-y-scroll scrollbar-hide md:h-screen/0 md:grid-cols-3'>
        {trendingdata.trendings &&
          trendingdata.trendings.map((element, index) => {
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
const mapStateToProps = state => {
  return {
    trendingdata: state.storedData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchTrending: () => dispatch(fetchTrending())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trending)
