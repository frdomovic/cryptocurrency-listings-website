import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Exchangedisplay from './Pages/ExchangeDisplay/Exchangedisplay'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Currency from './Pages/CurrencyDisplay/Currency'
import Trending from './Pages/Trending/Trending'
import Home from './Pages/Home/Home'
import SingleCurrencyDisplay from './Pages/SIngleCurrencyDisplay/SingleCurrencyDisplay'

const App = () => {
  return (
    <Router>
      <div className='w-full h-screen'>
        <div className='bg-dig-bg w-full h-screen bg-no-repeat bg-cover flex flex-col justify-between '>
          <Header />
          <Routes>
            <Route path='/exchanges' element={<Exchangedisplay />} />
            <Route path='/' exact element={<Home />} />
            <Route path='/cryptocurrencies' element={<Currency />} />
            <Route path='/trending' element={<Trending />} />
            <Route
              path='/currencydata/:cryptoid'
              element={<SingleCurrencyDisplay />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
