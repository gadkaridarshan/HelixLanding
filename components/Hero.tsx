// @helix:story [USER-277000]
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Helix AI Orchestrator</h1>
        <p className={styles.description}>
          Professional AI workflow automation platform that streamlines your
          development process.
        </p>
        <div className={styles.buttonGroup}>
          <a href="https://github.com/gadkaridarshan/Helix" className={styles.button}>
            View on GitHub
          </a>
          <a href="https://helix-ai-orchestrator.vercel.app/" className={styles.buttonAlt}>
            Try the Demo
          </a>
        </div>
      </div>
    </section>
  );
}