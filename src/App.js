import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Cart from './components/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        {/* <Cart /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
