import Navbar from './components/Navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>} />

          </Routes>
        </Router>        
      </ShopContextProvider>
    </div>

  );
}

export default App;
