import React, { useState } from 'react'
import { PingApi } from '../../Axios/ApiCalls'

export default function Home () {
  const [pingresponse, setPingrespose] = useState([])
  const sendPing = async () => {
    setPingrespose(await PingApi())
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-black bg-opacity-40 w-96 h-68 flex flex-col rounded-3xl items-center -mt-48'>
        <span className='text-white text-lg text-center mt-3'>
          Check if the API is working!
        </span>
        <button
          type='button'
          onClick={sendPing}
          className='bg-yellow-200 font-italic text-white bg-opacity-20 w-48 mt-5 rounded-3xl hover:text-white hover:bg-transparent hover:border hover:border-solid hover:border-yellow-200'
        >
          TEST ME
        </button>
        <div className='mt-5 text-white text-center mb-2'>
          Gecko says: <br />{' '}
          <span className='text-3xl font-bold text-green-600'>
            {pingresponse.gecko_says}
          </span>
        </div>
      </div>
    </div>
  )
}
