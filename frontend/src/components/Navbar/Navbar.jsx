import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.navTitle} onClick={closeMenu}>BY AHLCRONA</Link>

        <div className={styles.right}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
          </button>
        </div>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          <a className={styles.navLink} href="/#murals" onClick={closeMenu}>MURALS</a>
          <a className={styles.navLink} href="/#portfolio" onClick={closeMenu}>WORK</a>
          <a className={styles.navLink} href="/#about" onClick={closeMenu}>ABOUT</a>
          <a className={styles.navLink} href="/#contact" onClick={closeMenu}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
