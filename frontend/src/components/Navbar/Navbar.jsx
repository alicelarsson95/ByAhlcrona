import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navTitle}>Filippa Ahlcrona</h1>
      <div className={styles.links}>
        <a href="#portoflio">Portfolio</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
