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
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  useEffect(() => {
    if (isShopPage) { setScrolled(true); return; }
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShopPage]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.navTitle}>BY AHLCRONA</Link>
        <div className={styles.links}>
          <a className={styles.navLink} href="/#portfolio">PORTFOLIO</a>
          <Link className={styles.navLink} to="/shop">SHOP</Link>
          <a className={styles.navLink} href="/#about">ABOUT</a>
          <a className={styles.navLink} href="/#contact">CONTACT</a>
          <button className={styles.cartBtn} onClick={() => setIsOpen(true)} aria-label="Öppna kundvagn">
            <CartIcon />
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
