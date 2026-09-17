// @helix:story [USER-277000]
import styles from './Features.module.css';
import * as React from 'react';

export default function Features() {
  return (
    <section className={styles.features}>
      <h2>Key Features</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Workflow Automation</h3>
          <p>Automate complex AI workflows with visual orchestration.</p>
        </div>
        <div className={styles.card}>
          <h3>Multi-Agent Collaboration</h3>
          <p>Enable AI agents to collaborate on complex tasks.</p>
        </div>
        <div className={styles.card}>
          <h3>Enterprise Grade</h3>
          <p>Secure, scalable, and production-ready platform.</p>
        </div>
        <div className={styles.card}>
          <h3>Extensible</h3>
          <p>Integrate with any API or custom AI models.</p>
        </div>
        <div className={styles.card}>
          <h3>Real-time Monitoring</h3>
          <p>Track workflow performance and agent interactions.</p>
        </div>
        <div className={styles.card}>
          <h3>Open Source</h3>
          <p>Built on open standards with community-driven development.</p>
        </div>
      </div>
    </section>
  );
}