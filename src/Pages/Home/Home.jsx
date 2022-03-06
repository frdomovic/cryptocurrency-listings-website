import React, { useState } from 'react'
import { PingApi } from '../../Axios/ApiCalls'

export default function Home () {
  const [pingresponse, setPingrespose] = useState([])
  const sendPing = async () => {
    setPingrespose(await PingApi())
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='w-96 h-68 -mt-48 flex flex-col rounded-3xl items-center bg-black bg-opacity-40'>
        <span className='mt-3 text-white text-lg text-center '>
          Check if the API is working!
        </span>
        <button
          type='button'
          onClick={sendPing}
          className='w-48 mt-5 rounded-3xl bg-yellow-200  bg-opacity-20 text-white font-italic  hover:bg-transparent hover:text-white  hover:border hover:border-solid hover:border-yellow-200'
        >
          TEST ME
        </button>
        <div className='mt-5 mb-2 text-white text-center '>
          Gecko says: <br />{' '}
          <span className='text-3xl font-bold text-green-600'>
            {pingresponse.gecko_says}
          </span>
        </div>
      </div>
    </div>
  )
}
