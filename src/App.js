import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Aside from './components/Aside';
import CartList from './components/CartList';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import { books } from './utils/data';
import styles from './App.module.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [allBooks, setAllBooks] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setAllBooks(books);
  }, []);

  useEffect(() => {
    const totalCount = cartBooks.reduce((acc, curr) => acc + curr.count, 0);
    setCount(totalCount);
  }, [cartBooks]);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  function handleAddToCart(book) {
    const originalBook = allBooks.find(aBook => aBook.id === book.id);
    const updatedBook = {
      ...originalBook,
      count: originalBook.count + 1
    };
    const existingBook = cartBooks.find(cartBook => cartBook.id === book.id);

    if (!existingBook) {
      setCartBooks([...cartBooks, updatedBook]);
    } else {
      handleIncrementCount(updatedBook);
    }
  }

  function handleDeleteFromCart(id) {
    setCartBooks(cartBooks.filter(cartBook => cartBook.id !== id));
  }

  function handleDecrementCount(book) {
    const updatedCartBooks = cartBooks.map(cartBook => {
      if (cartBook.id === book.id && +cartBook.count !== 1) {
        return {
          ...cartBook,
          count: +cartBook.count - 1,
          total: cartBook.count * cartBook.price
        };
      }
      return cartBook;
    });

    setCartBooks(updatedCartBooks);
  }

  function handleIncrementCount(book) {
    const updatedCartBooks = cartBooks.map(cartBook => {
      if (cartBook.id === book.id && cartBook.count < book.stock) {
        return {
          ...cartBook,
          count: +cartBook.count + 1
        };
      }
      return cartBook;
    });

    setCartBooks(updatedCartBooks);
  }

  function handleChangeCount(book, e) {
    if (isNaN(e.target.value)) {
      e.target.value = 1;
    }

    if (parseInt(e.target.value) > book.stock) {
      e.target.value = book.stock;
    }

    const updatedCartBooks = cartBooks.map(cartBook => {
      if (cartBook.id === book.id) {
        return { ...cartBook, count: e.target.value };
      }
      return cartBook;
    });

    setCartBooks(updatedCartBooks);
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navigation count={count} onShowCart={handleShowCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={
              <Products allBooks={allBooks} onAddToCart={handleAddToCart} />
            }
          />
        </Routes>
      </BrowserRouter>

      {showCart && (
        <Aside>
          {cartBooks.length === 0 && (
            <p style={{ color: 'white' }}>cart is empty</p>
          )}
          {cartBooks.map(cartBook => (
            <CartList
              key={cartBook.id}
              cartBook={cartBook}
              onDeleteFromCart={handleDeleteFromCart}
              onDecrementCount={handleDecrementCount}
              onIncrementCount={handleIncrementCount}
              onChangeCount={handleChangeCount}
            />
          ))}
        </Aside>
      )}
    </div>
  );
}
