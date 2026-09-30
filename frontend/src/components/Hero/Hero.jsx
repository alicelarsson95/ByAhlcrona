import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import dandelions from "../../assets/portfolio/dandelions.webp";
import pinkFlower from "../../assets/portfolio/pink-flower.webp";
import sliceLife from "../../assets/portfolio/slice-life.webp";
import redYellowFlower from "../../assets/portfolio/red-yellow-flower.webp";
import tomatoes from "../../assets/portfolio/tomatoes.webp";

// I visningsordning, vänster till höger
const works = [dandelions, pinkFlower, sliceLife, redYellowFlower, tomatoes];

const Hero = () => {
  // Blomm-i:t (U+F006) finns bara i Tropi Land. Använd det först när fonten
  // har laddats, annars blir det tomma rutor i reservfonten.
  const [flowerI, setFlowerI] = useState(false);

  useEffect(() => {
    document.fonts
      .load("1em 'Tropi Land'", "\uF006")
      .then((fonts) => setFlowerI(fonts.length > 0))
      .catch(() => {});
  }, []);

  const i = flowerI ? "\uF006" : "i";

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
        <Link to="/shop" className={styles.sticker}>Shop prints</Link>
      </div>
    </section>
  );
};

export default Hero;
