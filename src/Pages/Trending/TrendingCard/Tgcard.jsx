import React from 'react'

const Tgcard = ({ name, image, id, symbol, marketcap, price }) => {
  return (
    <div className='w-full p-2 justify-center items-center md:w-full '>
      <div>
        <div className='p-4 flex flex-col rounded-lg bg-black bg-opacity-70 border-2 border-black'>
          <div className='w-fill flex flex-row text-left'>
            <img src={image} alt='exchange-logo' className='rounded-lg' />
            <div className='ml-1 text-yellow-300 font-bold text-xl'>
              {name}
              <p className='flex items-center text-gray-400 text-sm'>
                {symbol}
              </p>
            </div>
          </div>
          <div className='mt-3 flex items-center text-left'>
            <div className='text-sm'>
              <p className='text-gray-300'>
                Marketcap rank:
                <span className='ml-2 text-white font-bold'>{marketcap}</span>
              </p>
              <p className='text-gray-300'>
                Price:
                <span className='ml-2 font-bold'>{price} $</span>
              </p>
              <p className='text-gray-300'>
                id: <span className='ml-1 text-orange-200'> {id}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tgcard
