import Home from './components/Home';
import ProductView from './components/ProductView';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import Admin from './components/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
