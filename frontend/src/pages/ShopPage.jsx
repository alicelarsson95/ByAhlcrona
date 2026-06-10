import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import styles from "./ShopPage.module.css";

const categories = ["Alla", "Print", "Original", "Limited"];

const ShopPage = () => {
  const [active, setActive] = useState("Alla");
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = active === "Alla" ? products : products.filter((p) => p.category === active);

  const fmt = (n) => n.toLocaleString("sv-SE") + " kr";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.pageHeader}>
          <Link to="/" className={styles.back}>← Tillbaka</Link>
          <h1 className={styles.title}>Webshop</h1>
          <p className={styles.subtitle}>Originalverk och prints tillgängliga för köp</p>
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
              <div className={styles.image} />
              <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.price}>{fmt(product.price)}</p>
                <button className={styles.button} onClick={() => addToCart(product)}>
                  Lägg i kundvagn
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
