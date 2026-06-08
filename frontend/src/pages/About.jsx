import styles from "./About.module.css";
import Filippa from "../assets/about-picture.png";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <h2 className={styles.title}>Om konstnären</h2>
          <div className={styles.divider}></div>
          <p className={styles.bio}>
            Filippa Ahlcrona är en svensk konstnär med ett hjärta för färg, form
            och berättande. Med rötterna i Malmö skapar hon verk som rör sig
            mellan det vardagliga och det drömlika — ofta med humor och värme
            som röd tråd. Hennes arbete spänner över allt från intima
            originalverk till väggmålningar i det offentliga rummet.
          </p>
          <button className={styles.button}>Kontakta mig</button>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imagePlaceholder}>
            <img src={Filippa} alt="Filippa Ahlcrona" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;