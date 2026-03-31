import styles from "./Shop.module.css";

const Shop = () => {
  const products = [
    { id: 1, title: "Miljö — Print", price: "1 200 kr" },
    { id: 2, title: "Chili & Lime — Original", price: "18 500 kr" },
    { id: 3, title: "Blomma — Print", price: "950 kr" },
    { id: 4, title: "Pizza — Print", price: "1 400 kr" },
  ];
  return (
    <section id="shop">
      <div className={styles.container}>
        <h2 className={styles.title}>Webshop</h2>
        <p className={styles.subtitle}>Originalverk och prints tillgängliga för köp</p>
        
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.image}></div>

              <div className={styles.info}>
                <h3>{product.title}</h3>
                <p className={styles.price}>{product.price}</p>

                <button className={styles.button}>Köp</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Shop;
