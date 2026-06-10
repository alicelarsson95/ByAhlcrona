import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import styles from "./ShopPage.module.css";

const categories = ["All", "Print", "Original", "Limited"];

const ShopPage = () => {
  const [active, setActive] = useState("All");
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  const fmt = (n) => n.toLocaleString("sv-SE") + " kr";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.pageHeader}>
          <Link to="/" className={styles.back}>← Back</Link>
          <h1 className={styles.title}>Shop</h1>
          <p className={styles.subtitle}>Original works and prints available for purchase</p>
          <div className={styles.divider} />

          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.active : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link to={`/shop/${product.id}`} className={styles.cardLink}>
                <div className={styles.image} />
                <div className={styles.info}>
                  <span className={styles.category}>{product.category}</span>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.price}>{fmt(product.price)}</p>
                </div>
              </Link>
              <div className={styles.cardFooter}>
                <button className={styles.button} onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ShopPage;
