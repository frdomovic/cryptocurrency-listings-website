import React from 'react'

const Excard = ({ name, country, year, url, rank, trade, image }) => {
  return (
    <div className='p-2 w-full md:w-full justify-center items-center'>
      <div>
        <div className='bg-black  bg-opacity-70 border-2 border-black rounded-lg p-4 flex flex-col '>
          <div className='flex flex-row w-fill text-left'>
            <img src={image} alt='exchange-logo' className='rounded-lg' />
            <div className='text-yellow-300 font-bold text-xl ml-1'>
              {name}
              <p className='text-sm text-gray-400 flex items-center'>
                {country}, {year}
              </p>
            </div>
          </div>
          <div className='flex items-center mt-3 text-left'>
            <div className='text-sm'>
              <p className='text-gray-300'>
                RANK:
                <span className='font-bold ml-2'>{rank}</span>
              </p>
              <p className='text-gray-300'>
                Trading Volume:{' '}
                <span className='ml-1 text-orange-200 text-LG'>
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
