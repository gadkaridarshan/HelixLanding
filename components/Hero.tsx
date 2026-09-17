import styles from './Hero.module.css';
import { Button } from '@/components/UI/Button';

export default function Hero() {
  return (
    <section className={`${styles.hero} min-h-[90vh] flex flex-col items-center justify-center gap-8 text-center py-12`}>
      <div className={`${styles.content} max-w-4xl space-y-6`}>
        <h1 className={`${styles.title} text-4xl font-bold text-gray-900 sm:text-5xl`}>
          Helix AI Orchestrator
        </h1>
        <p className={`${styles.subtitle} text-lg text-gray-600`}>
          Professional AI workflow automation platform that transforms complex processes into streamlined, intelligent workflows.
        </p>
        <div className={`${styles.buttons} flex flex-col sm:flex-row gap-4`}>
          <Button variant="primary" size="lg">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
      <div className={`${styles.image} w-full max-w-2xl`}>
        {/* Placeholder for hero illustration */}
        <div className="w-full h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center">
          {/* Illustration or image can be placed here */}
        </div>
      </div>
    </section>
  );
}