import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.brand}>BY AHLCRONA</span>
        <span className={styles.copy}>© Filippa Ahlcrona</span>
      </div>
    </footer>
  );
};

export default Footer;
