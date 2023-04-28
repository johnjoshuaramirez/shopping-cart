import { useState } from 'react';
import Book from '../../components/Book';
import { books as data } from '../../data/books';
import styles from './Shop.module.css';

const Shop = () => {
  const [books, setBooks] = useState(data);
  console.log(books);

  return (
    <main className={styles.shop}>
      {books.map(book => (
        <Book
          key={book.id}
          url={book.url}
          title={book.title}
          author={book.author}
          price={book.price}
        />
      ))}
    </main>
  );
};

export default Shop;
