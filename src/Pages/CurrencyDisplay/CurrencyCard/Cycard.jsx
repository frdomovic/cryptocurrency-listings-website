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
      className='w-full mb-5 rounded-lg grid grid-cols-3 text-white bg-black bg-opacity-70 md:p-2 md:w-full 
       md:grid-cols-6  hover:border hover:border-solid hover:border-bg-green-300 hover:bg-opacity-100'
      onClick={() => navigate(`/currencydata/${id}`)}
    >
      <div className='flex flex-row'>
        <img
          src={image}
          alt='exchange-logo'
          className='h-8 mt-2 mb-2 mr-1 rounded-lg md:h-10 md:mt-1 '
        />
        <div>
          <h1 className='mt-1 text-sm md:text-lg md:font-bold '>{name}</h1>
          <h2 className='text-sm md:text-md'>{symbol.toUpperCase()}</h2>
        </div>
      </div>
      <div className='mt-3 ml-4 text-sm md:-ml-14 md:flex md:justify-center md:text-md  '>
        {Number(price).toLocaleString()} $
      </div>
      <div className='mt-3 ml-3 md:ml-10'>
        {change < 0 ? (
          <span className='text-red-600'>
            {parseFloat(change).toFixed(2)} %
          </span>
        ) : (
          <span className='text-green-400'>{change} %</span>
        )}
      </div>
      <div className='mt-3 hidden text-left md:block '>
        {Number(marketcap).toLocaleString()} $
      </div>
      <div className='mt-3 hidden md:block'>
        {Number(volume).toLocaleString()}{' '}
      </div>
      <div className='mt-3 hidden md:block'>
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
