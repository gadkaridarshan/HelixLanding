import styles from "@/components/Features.module.css";
import text from "@/content/text.json";

export default function Features() {
  return (
    <section className={`${styles.features} py-16`}>
      <div
        className={`${styles.content} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <h2
          className={`${styles.title} text-3xl font-bold text-center text-gray-900 mb-12`}
        >
          Features
        </h2>
        <div
          className={`${styles.grid} grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {text.features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.feature} bg-white p-6 rounded-lg shadow`}
            >
              <h3
                className={`${styles.featureTitle} text-xl font-semibold text-gray-800 mb-3`}
              >
                {feature.title}
              </h3>
              <p className={`${styles.featureDescription} text-gray-600`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
