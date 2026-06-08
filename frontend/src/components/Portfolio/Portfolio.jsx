import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const artworks = [
    { id: 1, title: "Blomma", year: 2024 },
    { id: 2, title: "Skog", year: 2023 },
    { id: 3, title: "Hav", year: 2022 },
    { id: 4, title: "Fält", year: 2024 },
    { id: 5, title: "Dröm", year: 2023 },
    { id: 6, title: "Ljus", year: 2022 },
  ];

  return (
    <section id="portfolio">
      <div className={styles.container}>
        <h2 className={styles.portfolioTitle}>Portfolio</h2>
        <div className={styles.divider}></div>

        <div className={styles.buttons}>
          <button className={styles.active}>Alla</button>
          <button>Tavlor</button>
          <button>Väggmålningar</button>
          <button>Övrigt</button>
        </div>

        <div className={styles.grid}>
          {artworks.map((art) => (
            <div key={art.id} className={styles.card}>
              <div className={styles.overlay}>
                <h3>{art.title}</h3>
                <p>{art.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
