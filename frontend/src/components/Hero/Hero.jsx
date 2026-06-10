import styles from "./Hero.module.css";
import img1 from "../../assets/portfolio/banana.jpg";
import img2 from "../../assets/portfolio/pink-flower.jpg";
import img3 from "../../assets/portfolio/pizza-time.png";
import img4 from "../../assets/portfolio/dandelions.png";
import img5 from "../../assets/portfolio/slice-life.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={`${styles.kicker} ${styles.fadeIn}`}>Konst & Design</p>
        <h1 className={`${styles.title} ${styles.fadeIn} ${styles.fadeInDelay1}`}>Filippa Ahlcrona</h1>
        <p className={`${styles.tagline} ${styles.fadeIn} ${styles.fadeInDelay2}`}>
          Världens bästa vän och konstnär
        </p>
        <button
          className={`${styles.cta} ${styles.fadeIn} ${styles.fadeInDelay3}`}
          onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
        >Utforska</button>
      </div>

      <div className={styles.collage}>
        <div className={`${styles.imgCard} ${styles.img1}`}><img src={img1} alt="" /></div>
        <div className={`${styles.imgCard} ${styles.img2}`}><img src={img2} alt="" /></div>
        <div className={`${styles.imgCard} ${styles.img3}`}><img src={img3} alt="" /></div>
        <div className={`${styles.imgCard} ${styles.img4}`}><img src={img4} alt="" /></div>
        <div className={`${styles.imgCard} ${styles.img5}`}><img src={img5} alt="" /></div>
      </div>

      <div className={styles.scrollIndicator}>˅</div>
    </section>
  );
};

export default Hero;
