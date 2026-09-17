import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "Helix has transformed our workflow automation, reducing manual
              efforts by 70% and increasing accuracy significantly."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-bold">JD</span>
              </div>
              <div className="ml-3">
                <h3 className="text-gray-900 dark:text-white font-medium">John Doe</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechCorp</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "The intuitive interface and powerful AI capabilities have made
              our processes more efficient and data-driven."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-bold">AS</span>
              </div>
              <div className="ml-3">
                <h3 className="text-gray-900 dark:text-white font-medium">Anna Smith</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Operations Manager, HealthPlus</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "Helix's scalability and security features have given us the
              confidence to expand our operations globally."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-bold">ML</span>
              </div>
              <div className="ml-3">
                <h3 className="text-gray-900 dark:text-white font-medium">Michael Lee</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO, GlobalSolutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;