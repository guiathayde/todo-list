import styles from './Header.module.css';

import logo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Rocket" />
        <h1 className={styles.to}>to</h1>
        <h1 className={styles.do}>do</h1>
      </div>
    </header>
  );
}
