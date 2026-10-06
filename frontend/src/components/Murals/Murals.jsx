import styles from "./Murals.module.css";
import murals from "../../data/murals";

const Murals = () => {
  const [main, second] = murals;

  return (
    <section id="murals" className={styles.murals}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Murals</h2>
          <p className={styles.intro}>
            Large-scale paintings for walls, cafés and public spaces. Bold colours,
            playful shapes and a lot of flowers.
          </p>

          <ul className={styles.list}>
            {murals.map((mural) => (
              <li key={mural.id} className={styles.item}>
                <span className={styles.itemTitle}>{mural.title}</span>
                <span className={styles.itemMeta}>
                  {mural.location} · {mural.year}
                </span>
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.button}>Book a mural</a>
        </div>

        <div className={styles.images}>
          <img src={main.images[0]} alt={main.title} className={styles.arch} />
          {second && (
            <img src={second.images[0]} alt={second.title} className={styles.small} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Murals;
