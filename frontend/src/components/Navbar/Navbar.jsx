import styles from "./Navbar.module.css";
import { useState, useEffect} from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
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
