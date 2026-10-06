import styles from "./Hero.module.css";
import useFlowerI from "../../hooks/useFlowerI";
import dandelions from "../../assets/portfolio/dandelions.webp";
import pinkFlower from "../../assets/portfolio/pink-flower.webp";
import sliceLife from "../../assets/portfolio/slice-life.webp";
import redYellowFlower from "../../assets/portfolio/red-yellow-flower.webp";
import tomatoes from "../../assets/portfolio/tomatoes.webp";

// I visningsordning, vänster till höger
const works = [dandelions, pinkFlower, sliceLife, redYellowFlower, tomatoes];

const Hero = () => {
  const i = useFlowerI();

  return (
    <section className={styles.hero}>
      <p className={`${styles.kicker} ${styles.fadeIn}`}>Art & Design · Malmö</p>
      <h1 className={`${styles.title} ${styles.fadeIn} ${styles.fadeInDelay1}`} aria-label="Filippa Ahlcrona">
        F{i}l{i}ppa Ahlcrona
      </h1>

      <div className={styles.works}>
        {works.map((src, index) => (
          <img key={src} src={src} alt="" className={`${styles.work} ${styles[`w${index + 1}`]}`} />
        ))}
        <a href="#murals" className={styles.sticker}>See murals</a>
      </div>
    </section>
  );
};

export default Hero;
