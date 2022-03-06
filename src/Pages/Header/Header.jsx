import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import logo from '../../Assets/Images/logo.png'

const NavBarItem = ({ title, classProps }) => {
  let path = '/' + title
  return (
    <li className={`mx-4 cursor-pointer ${classProps} `}>
      <a href={path}>{title}</a>
    </li>
  )
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='bg-black bg-opacity-40 flex md:justify-center justify-between items-center p-2 h-15'>
      <div className='md:flex-[0.5]  flex-initial justify-center items-center text-left pl-10 md:pl-0 '>
        <a href='/' className='flex flex-row'>
          <img
            src={logo}
            alt='logo'
            className='flex w-10 md:w-14 cursor-pointer pt-1'
          />
          <div className='text-white pt-4 md:pt-3 pl-2 text-lg md:text-3xl md:font-bold'>
            Xanadu Cipher
          </div>
        </a>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between item-center flex-initial'>
        {['Cryptocurrencies', 'Exchanges', 'Trending'].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className='flex-relative text-white z-10'>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='md:hidden cursor-pointer hover:text-amber-700'
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='md:hidden cursor-pointer hover:text-amber-700'
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
      </div>
      {toggleMenu && (
        <ul
          className='fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none bg-stone-700 bg-opacity-70
                flex flex-col justify-start items-end rounded-md text-white animate-slide-in'
        >
          <li className='mt-20 text-xl w-full my-2'></li>
          {['Cryptocurrencies', 'Exchanges', 'Trending'].map((item, index) => (
            <NavBarItem
              key={item + index}
              title={item}
              classProps='my-2 text-lg hover:text-amber-700'
            />
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Header
