import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { books as data } from './data/books';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setBooks(data);
  }, []);

  function handleAddToCart(selected) {
    const selectedBook = books.find(book => book.id === selected.id);

    const updatedBook = {
      ...selectedBook,
      quantity: selectedBook.quantity + 1
    };

    const bookExist = cartItems.find(item => item.id === selected.id);

    if (!bookExist) {
      setCartItems([...cartItems, updatedBook]);
    } else {
      handleIncrement(updatedBook);
    }
  }

  function handleDelete(selected) {
    setCartItems(cartItems.filter(item => item.id !== selected.id));
  }

  function handleDecrement(selected) {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === selected.id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  }

  function handleIncrement(selected) {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === selected.id && item.quantity < selected.stock) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  }

  function handleInputChange(selected, e) {
    let value = +e.target.value;

    if (isNaN(value)) return;
    if (value > selected.stock) value = selected.stock;

    const updatedCartItems = cartItems.map(item => {
      if (item.id === selected.id) {
        return {
          ...item,
          quantity: value
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  }

  function openDropdown() {
    setDropdownOpen(true);
  }

  function closeDropdown() {
    setDropdownOpen(false);
  }

  return (
    <BrowserRouter>
      <div onMouseEnter={closeDropdown}>
        <Header
          cartItems={cartItems}
          dropdownOpen={dropdownOpen}
          openDropdown={openDropdown}
          closeDropdown={closeDropdown}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onInputChange={handleInputChange}
        />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop books={books} onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
