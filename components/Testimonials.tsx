import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Helix transformed our operations. We reduced manual work by 80% and improved accuracy across all departments.',
      name: 'Sarah Chen',
      title: 'CTO, TechFlow Inc.',
      company: 'TechFlow Inc.',
    },
    {
      quote: 'The visual workflow designer made it easy for our team to automate complex processes without writing code.',
      name: 'Michael Rodriguez',
      title: 'Director of Operations',
      company: 'GlobalLogistics',
    },
    {
      quote: 'Enterprise-grade security and compliance features gave us confidence to scale our automation initiatives.',
      name: 'Dr. Emily Wong',
      title: 'VP of Engineering',
      company: 'HealthPlus Systems',
    },
  ];

  return (
    <section className={`${styles.testimonials} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${styles.title} text-3xl font-bold text-center text-gray-900 mb-12`}>
          What Our Customers Say
        </h2>
        <div className={`${styles.grid} grid gap-8 sm:grid-cols-1 lg:grid-cols-3`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${styles.card} bg-white rounded-xl shadow-sm p-6`}>
              <p className={`${styles.quote} text-lg text-gray-700 italic mb-6`}>
                "{testimonial.quote}"
              </p>
              <div className={`${styles.author} flex items-center space-x-4`}>
                <div className={`${styles.avatar} w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center`}>
                  <span className="text-indigo-600 font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className={`${styles.name} font-semibold text-gray-900`}>
                    {testimonial.name}
                  </h3>
                  <p className={`${styles.title} text-sm text-gray-500`}>
                    {testimonial.title}
                  </p>
                  <p className={`${styles.company} text-xs text-gray-400`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}