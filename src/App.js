import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { books } from './utils/data';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import styles from './App.module.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allBooks, setAllBooks] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setAllBooks(books);
  }, []);

  useEffect(() => {
    const totalCount = cartBooks.reduce((acc, curr) => acc + curr.count, 0);
    const totalPrice = cartBooks.reduce((acc, curr) => acc + curr.price * curr.count, 0);
    setCount(totalCount);
    setTotalPrice(totalPrice.toFixed(2));
  }, [cartBooks]);

  function handleAddToCart(book) {
    const originalBook = allBooks.find(aBook => aBook.id === book.id);
    const updatedBook = {
      ...originalBook,
      count: originalBook.count + 1
    };
    const bookExist = cartBooks.find(cartBook => cartBook.id === book.id);

    if (!bookExist) {
      setCartBooks([...cartBooks, updatedBook]);
    } else {
      handleIncrementCount(updatedBook);
    }
  }

  function handleDeleteFromCart(book) {
    setCartBooks(cartBooks.filter(cartBook => cartBook.id !== book.id));
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

    if (+e.target.value > book.stock) {
      e.target.value = book.stock;
    }

    const updatedCartBooks = cartBooks.map(cartBook => {
      if (cartBook.id === book.id) {
        return { ...cartBook, count: +e.target.value };
      }
      return cartBook;
    });

    setCartBooks(updatedCartBooks);
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navigation
          count={count}
          totalPrice={totalPrice}
          cartBooks={cartBooks}
          isHovering={isHovering}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onDeleteFromCart={handleDeleteFromCart}
          onDecrementCount={handleDecrementCount}
          onIncrementCount={handleIncrementCount}
          onChangeCount={handleChangeCount}
        />
        <Routes>
          <Route path="shopping-cart" element={<Home />} />
          <Route path="products"element={<Products allBooks={allBooks} onAddToCart={handleAddToCart} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
