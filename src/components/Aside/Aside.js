import styles from './Aside.module.css';

export default function Aside({ children }) {
  return (
    <div className={styles.aside}>
      {children}
      // Hello mofos
    </div>
  );
}
