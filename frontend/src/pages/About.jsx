import styles from "./About.module.css";
import Filippa from "../assets/about-picture.png";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <h2 className={styles.title}>About the Artist</h2>
          <div className={styles.divider}></div>
          <p className={styles.bio}>
            Filippa Ahlcrona is a Swedish artist with a passion for colour, form
            and storytelling. Rooted in Malmö, she creates works that move
            between the everyday and the dreamlike — often with humour and warmth
            as a common thread. Her work spans from intimate original pieces
            to large-scale murals in public spaces.
          </p>
          <button className={styles.button}>Contact me</button>
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