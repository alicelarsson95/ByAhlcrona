import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.navTitle}>BY AHLCRONA</h1>
        <div className={styles.links}>
          <a className={styles.navLink} href="#portfolio">
            PORTFOLIO
          </a>
          <a className={styles.navLink} href="#shop">
            SHOP
          </a>
          <a className={styles.navLink} href="#about">
            ABOUT
          </a>
          <a className={styles.navLink} href="#contact">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
