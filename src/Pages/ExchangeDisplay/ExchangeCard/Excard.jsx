import React from 'react'

const Excard = ({ name, country, year, url, rank, trade, image }) => {
  return (
    <div className='w-full p-2 justify-center items-center md:w-full'>
      <div>
        <div className='p-4 flex flex-col rounded-lg  bg-black bg-opacity-70 border-2 border-black'>
          <div className='w-fill flex flex-row text-left'>
            <img src={image} alt='exchange-logo' className='rounded-lg' />
            <div className='ml-1 text-yellow-300 font-bold text-xl '>
              {name}
              <p className=' flex items-center text-gray-400 text-sm'>
                {country}, {year}
              </p>
            </div>
          </div>
          <div className='mt-3 flex items-center text-left'>
            <div className='text-sm'>
              <p className='text-gray-300'>
                RANK:
                <span className=' ml-2 font-bold'>{rank}</span>
              </p>
              <p className='text-gray-300'>
                Trading Volume:{' '}
                <span className='ml-1 text-orange-200'>
                  {' '}
                  {Math.round(trade)} BTC
                </span>
              </p>
              {url === 'https://r.kraken.com/Q1m9x' ? (
                <a
                  href='https://www.kraken.com/'
                  className='text-yellow-200 text-base cursor-pointer overflow-hidden hover:text-green-300'
                >
                  {url}
                </a>
              ) : (
                <a
                  href={url}
                  className='text-yellow-100 text-base cursor-pointer overflow-ellipsis hover:text-green-300'
                >
                  {url.substring(0, 32)}...
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Excard
