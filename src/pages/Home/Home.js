import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Welcome to our book store!</h1>
      <Link to="/shop" className={styles.link}>
        <button>Shop Now</button>
      </Link>
    </main>
  );
};

export default Home;
