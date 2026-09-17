import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      icon: 'Zap',
      title: 'Intelligent Automation',
      description: 'Automate repetitive tasks with AI-powered workflows that learn and adapt to your business processes.',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Built-in compliance, audit trails, and role-based access control for secure operations at scale.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scalable Performance',
      description: 'Handle thousands of concurrent workflows with automatic scaling and optimized resource allocation.',
    },
    {
      icon: 'Settings',
      title: 'Custom Integrations',
      description: 'Connect with any API, database, or service using our extensive library of pre-built connectors.',
    },
    {
      icon: 'Users',
      title: 'Team Collaboration',
      description: 'Visual workflow designer and real-time collaboration tools for cross-functional teams.',
    },
    {
      icon: 'BarChart',
      title: 'Analytics & Monitoring',
      description: 'Real-time dashboards, performance metrics, and predictive insights for continuous improvement.',
    },
  ];

  return (
    <section className={`${styles.features} py-16 bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${styles.title} text-3xl font-bold text-center text-gray-900 mb-12`}>
          Powerful Features for Modern Workflows
        </h2>
        <div className={`${styles.grid} grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.card} bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow`}>
              <div className={`${styles.icon} w-12 h-12 mb-4 flex items-center justify-center bg-indigo-50 rounded-lg`}>
                {/* Icon placeholder */}
                <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {feature.icon === 'Zap' && (
                    <>
                    </>
                  )}
                  {feature.icon === 'Shield' && (
                    <>
                    </>
                  )}
                  {feature.icon === 'TrendingUp' && (
                    <>
                    </>
                  )}
                  {feature.icon === 'Settings' && (
                    <>
                      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                  {feature.icon === 'Users' && (
                    <>
                      <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                  {feature.icon === 'BarChart' && (
                    <>
                    </>
                  )}
                </svg>
              </div>
              <h3 className={`${styles.featureTitle} text-xl font-semibold text-gray-800 mb-2`}>
                {feature.title}
              </h3>
              <p className={`${styles.description} text-gray-600`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}