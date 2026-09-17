// @helix:story [USER-277000]
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to streamline your workflow?</h2>
        <p className={styles.description}>
          Join the future of AI-powered automation. Get started by exploring
          our open-source repository.
        </p>
        <a href="https://github.com/gadkaridarshan/Helix" className={styles.button}>
          GitHub Repository
        </a>
      </div>
    </section>
  );
}