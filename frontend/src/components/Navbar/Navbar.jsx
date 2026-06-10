import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isShopPage = location.pathname.startsWith("/shop");

  useEffect(() => {
    if (isShopPage) { setScrolled(true); return; }
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShopPage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.navTitle} onClick={closeMenu}>BY AHLCRONA</Link>

        <div className={styles.right}>
          <button className={styles.cartBtn} onClick={() => setIsOpen(true)} aria-label="Open cart">
            <CartIcon />
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </button>

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
          <a className={styles.navLink} href="/#portfolio" onClick={closeMenu}>PORTFOLIO</a>
          <Link className={styles.navLink} to="/shop" onClick={closeMenu}>SHOP</Link>
          <a className={styles.navLink} href="/#about" onClick={closeMenu}>ABOUT</a>
          <a className={styles.navLink} href="/#contact" onClick={closeMenu}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
