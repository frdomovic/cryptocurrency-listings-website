import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchMoreCoinInfo } from '../../Redux/API/apiActions'
import { useParams } from 'react-router-dom'

function SingleCurrencyDisplay ({ moreinfo, fetchMoreCoinInfo }) {
  let params = useParams()
  useEffect(() => {
    fetchMoreCoinInfo(params.cryptoid)
  }, [])

  return (
    <div className='ml-14 -mt-48 flex md:ml-0 md:justify-center'>
      <div className='w-4/5 h-screen/2 flex flex-col items-center rounded-3xl bg-black bg-opacity-40 md:w-2/4 md:h-screen/2'>
        <div className='mt-2 flex flex-col justify-center text-white md:text-md text-myfont'>
          <div className='grid grid-cols-3 md:grid-cols-8 '>
            <div>
              <img
                src={moreinfo.coininfo[4]}
                alt='logo'
                className='h-14 mt-1 ml-1 md:h-20 md:mt-2 md:ml-5'
              />{' '}
            </div>
            <div className='mt-5 flex flex-col col-span-2 text-left md:mt-0'>
              <div className='md:text-base'>
                NAME:{' '}
                <span className='text-orange-300 md:font-bold md:text-xl'>
                  {moreinfo.coininfo[0]}
                </span>
              </div>
              <div className='md:text-base'>
                SYMBOL:{' '}
                <span className='text-orange-300 md:font-bold md:text-xl'>
                  {moreinfo.coininfo[1]}
                </span>
              </div>
              <div className='md:text-base'>
                HASH ALGORITHM:{' '}
                {moreinfo.coininfo[2] ? (
                  <span className='text-orange-300 md:font-bold md:text-xl'>
                    {moreinfo.coininfo[2]}
                  </span>
                ) : (
                  <span className='text-orange-300 md:font-bold md:text-xl'>
                    N/A
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='mt-3 ml-2 md:text-base'>
            BLOCK CREATION TIME:{' '}
            <span className='text-orange-300  md:font-bold md:text-xl'>
              {moreinfo.coininfo[3]}
            </span>
          </div>
          <div className='ml-2 md:text-base'>
            GENESIS DATA:{' '}
            {moreinfo.coininfo[5] ? (
              <span className='text-orange-300 md:font-bold md:text-xl'>
                moreinfo.coininfo[5]
              </span>
            ) : (
              <span className='text-orange-300 md:font-bold md:text-xl'>
                N/A
              </span>
            )}
          </div>
          <div className='w-54 mr-1 ml-2 md:text-base md:w-fit'>
            DESCRIPTION:{' '}
            <span className='text-orange-300 md:font-bold md:text-xl'>
              <br />
              {String(moreinfo.coininfo[6]).substring(0, 700)}...
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    moreinfo: state.storedData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMoreCoinInfo: id => dispatch(fetchMoreCoinInfo(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCurrencyDisplay)
