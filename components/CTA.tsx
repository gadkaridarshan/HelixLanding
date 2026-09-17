// @helix:story [USER-277000]
import styles from './CTA.module.css';
import * as React from 'react';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2>Ready to orchestrate your AI workflows?</h2>
      <p>Join the community of developers building the next generation of AI applications.</p>
      <a href="https://github.com/gadkaridarshan/Helix" className={styles.button}>
        Get Started on GitHub
      </a>
    </section>
  );
}