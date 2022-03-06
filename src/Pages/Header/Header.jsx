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
    <nav className='h-15 p-2 justify-between items-center flex bg-black bg-opacity-40 md:justify-center'>
      <div className='pl-10 flex-initial justify-center items-center text-left md:pl-0 md:flex-[0.5]'>
        <a href='/' className='flex flex-row'>
          <img
            src={logo}
            alt='logo'
            className='w-10 pt-1 flex md:w-14 cursor-pointer '
          />
          <div className='pt-4 pl-2 text-white text-lg md:pt-3 md:font-bold md:text-3xl '>
            Xanadu Cipher
          </div>
        </a>
      </div>
      <ul className='flex-row flex-initial justify-between hidden list-none item-center  text-white md:flex'>
        {['Cryptocurrencies', 'Exchanges', 'Trending'].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className='flex-relative z-10 text-white '>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='cursor-pointer md:hidden hover:text-amber-700'
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='cursor-pointer md:hidden hover:text-amber-700'
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
      </div>
      {toggleMenu && (
        <ul
          className='w-[70vw] h-screen fixed top-0 -right-2 p-3  flex flex-col justify-start items-end rounded-md text-white animate-slide-in shadow-2xl  list-none bg-stone-700 bg-opacity-70
                 md:hidden'
        >
          <li className='w-full my-2 mt-20 text-xl '></li>
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
