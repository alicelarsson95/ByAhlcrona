import styles from "./Portfolio.module.css";
import artworks from "../../data/artworks";

// Fasta vinklar i stället för slump, så att lutningen är samma vid varje laddning
const TILTS = [-1.5, 1, -0.5, 1.5, -1, 0.5];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>More work</h2>

        <div className={styles.grid}>
          {artworks.map((art, index) => (
            <figure
              key={art.id}
              className={styles.card}
              style={{ "--tilt": `${TILTS[index % TILTS.length]}deg` }}
            >
              <img src={art.image} alt={art.title} className={styles.image} loading="lazy" />
              <figcaption className={styles.caption}>
                <span className={styles.cardTitle}>{art.title}</span>
                <span className={styles.medium}>{art.medium}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
