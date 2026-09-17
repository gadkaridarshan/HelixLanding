import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Intent Understanding',
      description: 'Advanced natural language processing accurately captures user intent and context, ensuring precise interpretation of complex requests.',
      icon: <svg className="featureIconSvg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      title: 'Agent Orchestration',
      description: 'Sophisticated orchestration engine coordinates multiple specialized AI agents to work together seamlessly on complex tasks.',
      icon: <svg className="featureIconSvg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      title: 'Streamlined Workflow',
      description: 'From input to output, Helix provides a seamless, efficient process that eliminates friction and delivers results faster.',
      icon: <svg className="featureIconSvg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      title: 'Actionable Insights',
      description: 'Transform raw data into clear, actionable recommendations that drive informed decision-making and measurable outcomes.',
      icon: <svg className="featureIconSvg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    }
  ];

  return (
    <section className="featuresSection">
      <div className="featuresContainer">
        <h2 className="featuresTitle">How Helix Works</h2>
        <div className="featuresGrid">
          {features.map((feature, index) => (
            <div key={index} className="featureCard">
              <div className="featureIcon">
                {feature.icon}
              </div>
              <h3 className="featureTitle">{feature.title}</h3>
              <p className="featureDescription">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;