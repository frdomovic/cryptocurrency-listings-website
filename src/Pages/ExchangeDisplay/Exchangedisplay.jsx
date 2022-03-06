import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchExchanges } from '../../Redux/API/apiActions'
import Excard from './ExchangeCard/Excard'

function Exchangedisplay ({ exchangesData, fetchExchanges }) {
  useEffect(() => {
    fetchExchanges()
  }, [])

  return (
    <div className=' mb-auto flex flex-col items-center'>
      <h1 className='mt-5 text-white text-bold text-lg md:text-3xl '>
        Cryptocurrency Exchanges List
      </h1>
      {exchangesData.error && (
        <h1 className='text-white text-3xl'>{exchangesData.error}</h1>
      )}
      <ul className='w-2/3 h-screen/1 mt-10 flex justify-center grid grid-cols-1 overflow-y-scroll scrollbar-hide md:h-screen/0 md:grid-cols-3 '>
        {exchangesData.exchanges &&
          exchangesData.exchanges.map((element, index) => (
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

const mapStateToProps = state => {
  return {
    exchangesData: state.storedData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchExchanges: () => dispatch(fetchExchanges())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exchangedisplay)
