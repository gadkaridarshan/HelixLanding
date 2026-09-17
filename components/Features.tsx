// @helix:story [USER-277000]
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Features</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Workflow Automation</h3>
            <p className={styles.cardDescription}>
              Automate repetitive tasks and focus on what matters most.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>AI-Powered Insights</h3>
            <p className={styles.cardDescription}>
              Get intelligent suggestions to optimize your processes.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Seamless Integrations</h3>
            <p className={styles.cardDescription}>
              Connect with your favorite tools and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}