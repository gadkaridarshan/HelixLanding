import styles from '@/components/CTA.module.css';
import { Button } from '@/components/UI/Button';
import text from '@/content/text.json';

export default function CTA() {
  return (
    <section className={`${styles.cta} bg-gradient-to-br from-indigo-50 to-indigo-100 py-16`}>
      <div className={`${styles.content} max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
        <h2 className={`${styles.title} text-3xl font-bold text-gray-900 mb-6`}>
          {text.cta.title}
        </h2>
        <p className={`${styles.description} text-lg text-gray-600 mb-8`}>
          {text.cta.description}
        </p>
        <Button variant="primary" size="lg">
          {text.cta.buttonText}
        </Button>
      </div>
    </section>
  );
}