import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>A haven for all book enthusiasts.</h1>
      <p>Escape reality and explore new horizons</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}
