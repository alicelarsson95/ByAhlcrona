import { useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <p>Product not found.</p>
          <Link to="/shop" className={styles.back}>← Back to shop</Link>
        </main>
      </>
    );
  }

  const fmt = (n) => n.toLocaleString("sv-SE") + " kr";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Link to="/shop" className={styles.back}>← Back to shop</Link>

        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imagePlaceholder} />
          </div>

          <div className={styles.infoCol}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>{fmt(product.price)}</p>

            <p className={styles.description}>{product.description}</p>

            <ul className={styles.meta}>
              <li><span className={styles.metaLabel}>Technique</span><span>{product.technique}</span></li>
              <li><span className={styles.metaLabel}>Size</span><span>{product.size}</span></li>
              <li><span className={styles.metaLabel}>Year</span><span>{product.year}</span></li>
            </ul>

            <button className={styles.button} onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
