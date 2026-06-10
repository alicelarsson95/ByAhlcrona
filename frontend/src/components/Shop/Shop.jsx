import { Link } from "react-router-dom";
import { products as allProducts } from "../../data/products";
import styles from "./Shop.module.css";

const fmt = (n) => n.toLocaleString("sv-SE") + " kr";

const Shop = () => {
  const featured = allProducts.slice(0, 4);

  return (
    <section id="shop">
      <div className={styles.container}>
        <h2 className={styles.title}>Shop</h2>
        <p className={styles.subtitle}>Original works and prints available for purchase</p>

        <div className={styles.grid}>
          {featured.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`} className={styles.card}>
              <div className={styles.image}></div>
              <div className={styles.info}>
                <h3>{product.title}</h3>
                <p className={styles.price}>{fmt(product.price)}</p>
                <span className={styles.button}>Buy</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.seeAll}>
        <Link to="/shop" className={styles.seeAllLink}>View all products →</Link>
      </div>
    </section>
  );
};

export default Shop;
