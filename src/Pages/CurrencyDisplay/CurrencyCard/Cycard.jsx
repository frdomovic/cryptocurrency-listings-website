import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cycard = ({
  name,
  symbol,
  image,
  price,
  marketcap,
  volume,
  change,
  supply,
  id
}) => {
  let navigate = useNavigate()
  return (
    <div
      className='text-white bg-black bg-opacity-70 p-2 w-full md:w-full mb-5 rounded-lg grid grid-cols-6 hover:bg-opacity-100 hover:border hover:border-solid hover:border-bg-green-300'
      onClick={() => navigate(`/currencydata/${id}`)}
    >
      <div className='flex flex-row'>
        <img
          src={image}
          alt='exchange-logo'
          className='rounded-lg h-10 mt-1 mb-2 mr-1'
        />
        <div>
          <h1 className='font-bold text-lg'>{name}</h1>
          <h2 className='text-md'>{symbol.toUpperCase()}</h2>
        </div>
      </div>
      <div className='ml-10 mt-3 justify-center'>
        {Number(price).toLocaleString()} $
      </div>
      <div className='mt-3'>
        {change < 0 ? (
          <span className='text-red-600'>
            {parseFloat(change).toFixed(2)} %
          </span>
        ) : (
          <span className='text-green-400'>{change} %</span>
        )}
      </div>
      <div className='mt-3 text-left'>
        {Number(marketcap).toLocaleString()} $
      </div>
      <div className='mt-3'>{Number(volume).toLocaleString()} </div>
      <div className='mt-3'>
        {supply > 100000000 ? (
          <span>{Number(supply / 1000000).toLocaleString()}M </span>
        ) : (
          <span>{Number(supply).toLocaleString()}</span>
        )}
      </div>
    </div>
  )
}

export default Cycard

/**
 * 
 * <div>
 * <img
        src={image}
        alt='exchange-logo'
        className='rounded-lg h-10 mt-1 mb-2 mr-1'
      />
        <div className='bg-black  bg-opacity-70 border-2 border-black rounded-lg p-4 flex flex-col'>
          <div className='flex flex-row w-fill text-left'>
            <img
              src={image}
              alt='exchange-logo'
              className='rounded-lg h-10 mt-1 mr-1'
            />
            <div className='text-yellow-300 font-bold text-xl ml-1'>
              {name}
              <p className='text-sm text-gray-400 flex items-center'>
                {symbol}
              </p>
            </div>
            <div className='text-white'>{price}$</div>
            <div className='text-white'>{change}$</div>
          </div>
        </div>
      </div>
 */
