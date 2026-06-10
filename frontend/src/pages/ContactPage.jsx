import styles from "./ContactPage.module.css";

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kontakt</h2>
        <div className={styles.divider}></div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.label}>E-post</span>
                <a href="mailto:filippa@byahlcrona.se" className={styles.link}>
                  filippa@byahlcrona.se
                </a>
              </li>
              <li>
                <span className={styles.label}>Telefon</span>
                <a href="tel:+46701234567" className={styles.link}>
                  +46 70 123 45 67
                </a>
              </li>
              <li>
                <span className={styles.label}>Stad</span>
                <span>Malmö
                
                </span>
              </li>
              <li>
                <span className={styles.label}>Land</span>
                <span>Sverige</span>
              </li>
            </ul>

            <div className={styles.socials}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <IconLinkedin />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">
                <IconFacebook />
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Namn</label>
              <input type="text" className={styles.input} placeholder="Ditt namn" />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>E-post</label>
              <input type="email" className={styles.input} placeholder="din@email.se" />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Meddelande</label>
              <textarea className={styles.textarea} placeholder="Skriv ditt meddelande här..." rows={5} />
            </div>
            <button type="submit" className={styles.button}>Skicka</button>
          </form>
        </div>

        <p className={styles.copy}>© {new Date().getFullYear()} By Ahlcrona. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Contact;
