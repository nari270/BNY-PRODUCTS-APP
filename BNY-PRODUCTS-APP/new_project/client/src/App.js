
import MainStore from "./components/MainStore"
import Login from './components/Login'
import Register from './components/Register'
import Success from './components/Success'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Checkout from './components/Checkout'
import OrderDetails from "./components/OrderDetails"

function App() {

  return (
    <>
      <Router>
          <Routes>
          <Route path="/orderdetails" element={<OrderDetails />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/store" element={<MainStore />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Login />}></Route>
          </Routes>
      </Router>

    </>
  )
}

export default App
