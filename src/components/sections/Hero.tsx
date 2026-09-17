import styles from "@/components/Hero.module.css";
import { Button } from "@/components/UI/Button";
import text from "@/content/text.json";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} min-h-[90vh] flex flex-col items-center justify-center gap-8 text-center py-12`}
    >
      <div className={`${styles.content} max-w-4xl space-y-6`}>
        <h1
          className={`${styles.title} text-4xl font-bold text-gray-900 sm:text-5xl`}
        >
          {text.hero.title}
        </h1>
        <p className={`${styles.subtitle} text-lg text-gray-600`}>
          {text.hero.subtitle}
        </p>
        <div className={`${styles.buttons} flex flex-col sm:flex-row gap-4`}>
          <Button variant="primary" size="lg">
            {text.hero.primaryButtonText}
          </Button>
          <Button variant="outline" size="lg">
            {text.hero.outlineButtonText}
          </Button>
        </div>
      </div>
      <div className={`${styles.image} w-full max-w-2xl`}>
        {/* Placeholder for hero illustration */}
        <div className="w-full h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center">
          {/* Illustration would go here */}
        </div>
      </div>
    </section>
  );
}
