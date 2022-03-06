import React from 'react'

const Tgcard = ({ name, image, id, symbol, marketcap, price }) => {
  return (
    <div className='p-2 w-full md:w-full justify-center items-center'>
      <div>
        <div className='bg-black  bg-opacity-70 border-2 border-black rounded-lg p-4 flex flex-col '>
          <div className='flex flex-row w-fill text-left'>
            <img src={image} alt='exchange-logo' className='rounded-lg' />
            <div className='text-yellow-300 font-bold text-xl ml-1'>
              {name}
              <p className='text-sm text-gray-400 flex items-center'>
                {symbol}
              </p>
            </div>
          </div>
          <div className='flex items-center mt-3 text-left'>
            <div className='text-sm'>
              <p className='text-gray-300'>
                Marketcap rank:
                <span className='font-bold ml-2 text-white'>{marketcap}</span>
              </p>
              <p className='text-gray-300'>
                Price:
                <span className='font-bold ml-2'>{price} $</span>
              </p>
              <p className='text-gray-300'>
                id: <span className='ml-1 text-orange-200 text-LG'> {id}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tgcard
