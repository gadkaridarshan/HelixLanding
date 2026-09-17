// @helix:story [USER-277000]
import styles from './Hero.module.css';
import * as React from 'react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Helix AI Orchestrator</h1>
      <p>Professional AI workflow automation platform</p>
      <a href="https://github.com/gadkaridarshan/Helix" className={styles.button}>
        GitHub Repository
      </a>
    </section>
  );
}