import { useState } from "react";
import styles from "./Portfolio.module.css";

import banana from "../../assets/portfolio/banana.webp";
import closeTextureFlower from "../../assets/portfolio/close-texture-flower.webp";
import dandelions from "../../assets/portfolio/dandelions.webp";
import olive from "../../assets/portfolio/olive.webp";
import orangeFlower from "../../assets/portfolio/orange-flower.webp";
import pinkFlower from "../../assets/portfolio/pink-flower.webp";
import pizzaTime from "../../assets/portfolio/pizza-time.webp";
import redFlower2 from "../../assets/portfolio/red-flower-2.webp";
import redFlower from "../../assets/portfolio/red-flower.webp";
import redLeaves from "../../assets/portfolio/red-leaves.webp";
import redYellowFlower from "../../assets/portfolio/red-yellow-flower.webp";
import sliceLife from "../../assets/portfolio/slice-life.webp";
import textureFlower from "../../assets/portfolio/texture-flower.webp";
import tomatoes from "../../assets/portfolio/tomatoes.webp";
import whiteFlower from "../../assets/portfolio/white-flower.webp";
import whiteRedFlower from "../../assets/portfolio/white-red-flower.webp";

const artworks = [
  { id: 1,  title: "Banan",          year: 2024, img: banana,            category: "Other"    },
  { id: 2,  title: "Blomtextur",     year: 2024, img: closeTextureFlower, category: "Paintings" },
  { id: 3,  title: "Maskrosor",      year: 2023, img: dandelions,         category: "Paintings" },
  { id: 4,  title: "Oliver",         year: 2023, img: olive,              category: "Other"    },
  { id: 5,  title: "Orange Blomma",  year: 2024, img: orangeFlower,       category: "Paintings" },
  { id: 6,  title: "Rosa Blomma",    year: 2023, img: pinkFlower,         category: "Paintings" },
  { id: 7,  title: "Pizza Time",     year: 2022, img: pizzaTime,          category: "Other"    },
  { id: 8,  title: "Röd Blomma II",  year: 2024, img: redFlower2,         category: "Paintings" },
  { id: 9,  title: "Röd Blomma",     year: 2023, img: redFlower,          category: "Paintings" },
  { id: 10, title: "Röda Löv",       year: 2022, img: redLeaves,        category: "Murals"   },
  { id: 11, title: "Röd-gul Blomma", year: 2024, img: redYellowFlower,  category: "Paintings" },
  { id: 12, title: "Slice of Life",  year: 2023, img: sliceLife,        category: "Other"    },
  { id: 13, title: "Blomtextur II",  year: 2022, img: textureFlower,    category: "Murals"   },
  { id: 14, title: "Tomater",        year: 2024, img: tomatoes,         category: "Other"    },
  { id: 15, title: "Vit Blomma",     year: 2023, img: whiteFlower,      category: "Paintings" },
  { id: 16, title: "Vit-röd Blomma", year: 2022, img: whiteRedFlower,   category: "Murals"   },
];

const PER_PAGE = 6;
const FILTERS = ["All", "Paintings", "Murals", "Other"];

const Portfolio = () => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? artworks : artworks.filter((a) => a.category === filter);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleFilter = (f) => {
    setFilter(f);
    setPage(0);
  };

  return (
    <section id="portfolio">
      <div className={styles.container}>
        <h2 className={styles.portfolioTitle}>Portfolio</h2>

        <div className={styles.divider}></div>

        <div className={styles.buttons}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={filter === f ? styles.active : ""}
              onClick={() => handleFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map((art) => (
            <div key={art.id} className={styles.card}>
              <img src={art.img} alt={art.title} className={styles.image} />
              <div className={styles.overlay}>
                <h3>{art.title}</h3>
                <p>{art.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.arrow}
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
          >
            &#8592;
          </button>
          <span>{page + 1} / {totalPages}</span>
          <button
            className={styles.arrow}
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
