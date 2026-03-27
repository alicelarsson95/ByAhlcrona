import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={`${styles.kicker} ${styles.fadeIn}`}>Konst & Design</p>

        <h1 className={`${styles.title} ${styles.fadeIn} ${styles.fadeInDelay1}`}>Filippa Ahlcrona</h1>

        <p className={`${styles.tagline} ${styles.fadeIn} ${styles.fadeInDelay2}`}>
          Världens bästa vän och konstnär
        </p>

        <button className={`${styles.cta} ${styles.fadeIn} ${styles.fadeInDelay3}`}>Utforska</button>
      </div>

      <div className={styles.scrollIndicator}>˅</div>
    </section>
  );
};

export default Hero;
