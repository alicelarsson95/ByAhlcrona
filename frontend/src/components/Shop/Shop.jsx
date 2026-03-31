import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <section id="shop">
      <div className={styles.container}>
        <h2 className={styles.title}>Webshop</h2>

        <p className={styles.subtitle}>Originalverk och prints tillgängliga för köp</p>

        <div className={styles.grid}>
          <div className={styles.card}>
  <div className={styles.image}></div>

  <div className={styles.info}>
    <h3>Gryning — Print</h3>
    <p className={styles.price}>1 200 kr</p>

    <button className={styles.button}>Köp</button>
  </div>
</div>
          <div className={styles.card}>
  <div className={styles.image}></div>

  <div className={styles.info}>
    <h3>Gryning — Print</h3>
    <p className={styles.price}>1 200 kr</p>

    <button className={styles.button}>Köp</button>
  </div>
</div>
          <div className={styles.card}>
  <div className={styles.image}></div>

  <div className={styles.info}>
    <h3>Gryning — Print</h3>
    <p className={styles.price}>1 200 kr</p>

    <button className={styles.button}>Köp</button>
  </div>
</div>
          <div className={styles.card}>
  <div className={styles.image}></div>

  <div className={styles.info}>
    <h3>Gryning — Print</h3>
    <p className={styles.price}>1 200 kr</p>

    <button className={styles.button}>Köp</button>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
