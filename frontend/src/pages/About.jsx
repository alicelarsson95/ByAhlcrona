import styles from "./About.module.css";
import Filippa from "../assets/about-picture.png";
import useFlowerI from "../hooks/useFlowerI";

const About = () => {
  const i = useFlowerI();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.photoWrap}>
            <img src={Filippa} alt="Filippa Ahlcrona" className={styles.photo} />
            <span className={styles.sticker}>Malmö based</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.title} aria-label="Hi, I'm Filippa">
            <span aria-hidden="true">H{i}, I'm F{i}l{i}ppa</span>
          </h2>
          <p className={styles.bio}>
            Filippa Ahlcrona is a Swedish artist with a passion for colour, form
            and storytelling. Rooted in Malmö, she creates works that move
            between the everyday and the dreamlike — often with humour and warmth
            as a common thread. Her work spans from intimate original pieces
            to large-scale murals in public spaces.
          </p>
          <button className={styles.button} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
