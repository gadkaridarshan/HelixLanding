import styles from './CTA.module.css';
import { Button } from '@/components/UI/Button';

export default function CTA() {
  return (
    <section className={`${styles.cta} py-16 bg-gradient-to-br from-indigo-50 to-indigo-100`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`${styles.title} text-3xl font-bold text-gray-900 mb-6`}>
          Ready to Transform Your Workflows?
        </h2>
        <p className={`${styles.description} text-lg text-gray-600 mb-8`}>
          Start your free trial today and experience the power of AI-driven automation.
        </p>
        <div className={`${styles.buttons} flex flex-col sm:flex-row gap-4 justify-center`}>
          <Button variant="primary" size="lg">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}