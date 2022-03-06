import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetMoreCoinInfo } from '../../Axios/ApiCalls'

export default function SingleCurrencyDisplay () {
  const [cryptodata, setCryptoData] = useState([])
  let params = useParams()

  const getData = async () => {
    let a = await GetMoreCoinInfo(params.cryptoid)
    console.log('name ', a[0])
    console.log('symbol', a[1])
    console.log('hashalgo2')
    console.log('block-time: ', a[3])
    console.log('image:', a[4])
    console.log('genesis_data5: ')
    console.log('description: ', a[6])
    setCryptoData(await GetMoreCoinInfo(params.cryptoid))
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-black bg-opacity-40 w-2/4 h-screen/0 flex flex-col rounded-3xl items-center '>
        <button
          type='button'
          onClick={getData}
          className='text-white bg-green-500 w-48 mt-3'
        >
          CLICK ME
        </button>
        <div className='flex grid-cols-1 justify-center text-white'>
          <div>NAME: {cryptodata[0]}</div>
          <div>SYMBOL: {cryptodata[1]}</div>
          <div>HASH ALGORITHM: {cryptodata[2] ? cryptodata[2] : 'N/A'}</div>
          <div>BLOCK CREATION TIME: {cryptodata[3]}</div>
          <div>IMAGE: {cryptodata[4]}</div>
          <div>GENESIS DATA: {cryptodata[5] ? cryptodata[5] : 'N/A'}</div>
          <div>DESCRIPTION: {cryptodata[6]}</div>
        </div>
      </div>
    </div>
  )
}

/**
 * response.name,
    response.symbol,
    response.hashing_alogirthm,
    response.block_time_in_minutes,
    response.image.large,
    response.genesis_data,
    response.description.en
 */
