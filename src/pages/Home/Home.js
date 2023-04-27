import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Welcome to our book store!</h1>
      <p>
        Take your time, browse our shelves, and discover your next great read.
      </p>
      <button>Shop Now</button>
    </main>
  );
};

export default Home;
