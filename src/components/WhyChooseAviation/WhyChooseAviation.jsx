<<<<<<< HEAD
// import React from 'react';
// import './WhyChooseAviation.css';

// const WhyChooseAviation = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Aviation DNA",
//       description: "Our experts live and breathe airline operations—from A-checks to air-traffic control.",
//       icon: "✈️"
//     },
//     {
//       id: 2,
//       title: "End-to-End Partnership",
//       description: "Strategy, architecture, implementation, and 24/7 support—all under one roof.",
//       icon: "🤝"
//     },
//     {
//       id: 3,
//       title: "Faster Innovation",
//       description: "Proprietary accelerators slash deployment time so you capture new revenue streams sooner.",
//       icon: "⚡"
//     },
//     {
//       id: 4,
//       title: "Tangible ROI",
//       description: "Measurable gains in uptime, fuel savings, crew utilization, and passenger satisfaction.",
//       icon: "📈"
//     },
//     {
//       id: 5,
//       title: "Global Reach, Local Touch",
//       description: "On-site teams in major hubs plus a U.S. help desk ready around the clock.",
//       icon: "🌍"
//     },
//     {
//       id: 6,
//       title: "Security & Compliance by Design",
//       description: "Built-in DevSecOps and automated audit trails keep you ahead of evolving threats.",
//       icon: "🔒"
//     }
//   ];

//   return (
//     <section className="why-choose-aviation">
//       <div className="container">
//         <div className="section-header">
//           <div className="section-title">
//             <div className="title-line"></div>
//             <h2>Why Choose Us</h2>
//             <div className="title-line"></div>
//           </div>
          
//           <h3 className="main-title">Why Vriba for Aviation</h3>
          
//           <p className="section-description">
//             Empowering aviation leaders with tailored, secure, and compliance-driven IT solutions at every altitude.
//           </p>
//         </div>
        
//         <div className="features-grid">
//           <div className="features-row">
//             {features.slice(0, 2).map((feature) => (
//               <div key={feature.id} className="feature-card">
//                 <div className="feature-icon">
//                   <span className="icon">{feature.icon}</span>
//                 </div>
                
//                 <div className="feature-content">
//                   <h4 className="feature-title">{feature.title}</h4>
//                   <p className="feature-description">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="features-row">
//             {features.slice(2, 4).map((feature) => (
//               <div key={feature.id} className="feature-card">
//                 <div className="feature-icon">
//                   <span className="icon">{feature.icon}</span>
//                 </div>
                
//                 <div className="feature-content">
//                   <h4 className="feature-title">{feature.title}</h4>
//                   <p className="feature-description">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="features-row">
//             {features.slice(4, 6).map((feature) => (
//               <div key={feature.id} className="feature-card">
//                 <div className="feature-icon">
//                   <span className="icon">{feature.icon}</span>
//                 </div>
                
//                 <div className="feature-content">
//                   <h4 className="feature-title">{feature.title}</h4>
//                   <p className="feature-description">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseAviation;
import React from 'react';
import './WhyChooseAviation.css'; // Import the corresponding CSS file

// Import Icons from react-icons (using Fa and Ri for variety)
import { FaPlane, FaHandshake, FaLightbulb, FaStar, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Aviation DNA',
    description: 'Our experts live and breathe airline operations—from A-checks to air-traffic control.',
    IconComponent: FaPlane,
  },
  {
    title: 'End-to-End Partnership',
    description: 'Strategy, architecture, implementation, and 24/7 support—all under one roof.',
    IconComponent: FaHandshake,
  },
  {
    title: 'Faster Innovation',
    description: 'Proprietary accelerators slash deployment time so you capture new revenue streams sooner.',
    IconComponent: FaLightbulb,
  },
  {
    title: 'Tangible ROI',
    description: 'Measurable gains in uptime, fuel savings, crew utilization, and passenger satisfaction.',
    IconComponent: FaStar, // Using FaStar, you might use FaChartLine for a financial icon
  },
  {
    title: 'Global Reach, Local Touch',
    description: 'On-site teams in major hubs plus a U.S. help desk ready around the clock.',
    IconComponent: FaGlobe,
  },
  {
    title: 'Security & Compliance by Design',
    description: 'Built-in DevSecOps and automated audit trails keep you ahead of evolving threats.',
    IconComponent: FaShieldAlt,
  },
];

const FeatureCard = ({ title, description, IconComponent }) => (
  <div className="aviation-feature-card">
    <div className="aviation-icon-container">
      {/* The actual icon component from react-icons */}
      <IconComponent size={28} className="aviation-icon" />
    </div>
    <div className="aviation-feature-content">
      <h3 className="aviation-feature-title">{title}</h3>
      <p className="aviation-feature-description">{description}</p>
    </div>
  </div>
);

const WhyChooseAviation = () => (
  <section className="aviation-section">
    <div className="aviation-header">
      <p className="aviation-subheading-line">
        <span className="aviation-subheading">WHY CHOOSE US</span>
      </p>
      <h1 className="aviation-main-title">Why Vriba for Aviation</h1>
      <p className="aviation-intro-text">
        Empowering aviation leaders with tailored, secure, and compliance-driven IT solutions at every altitude.
      </p>
    </div>

    <div className="aviation-features-grid">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          IconComponent={feature.IconComponent}
        />
      ))}
    </div>
  </section>
);

export default WhyChooseAviation;
=======
import React from 'react';
import './WhyChooseAviation.css';

const WhyChooseAviation = () => {
  const features = [
    {
      id: 1,
      title: "Aviation DNA",
      description: "Our experts live and breathe airline operations—from A-checks to air-traffic control.",
      icon: "✈️"
    },
    {
      id: 2,
      title: "End-to-End Partnership",
      description: "Strategy, architecture, implementation, and 24/7 support—all under one roof.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Faster Innovation",
      description: "Proprietary accelerators slash deployment time so you capture new revenue streams sooner.",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Tangible ROI",
      description: "Measurable gains in uptime, fuel savings, crew utilization, and passenger satisfaction.",
      icon: "📈"
    },
    {
      id: 5,
      title: "Global Reach, Local Touch",
      description: "On-site teams in major hubs plus a U.S. help desk ready around the clock.",
      icon: "🌍"
    },
    {
      id: 6,
      title: "Security & Compliance by Design",
      description: "Built-in DevSecOps and automated audit trails keep you ahead of evolving threats.",
      icon: "🔒"
    }
  ];

  return (
    <section className="why-choose-aviation">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Why Choose Us</h2>
            <div className="title-line"></div>
          </div>
          
          <h3 className="main-title">Why Vriba for Aviation</h3>
          
          <p className="section-description">
            Empowering aviation leaders with tailored, secure, and compliance-driven IT solutions at every altitude.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="features-row">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-row">
            {features.slice(2, 4).map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-row">
            {features.slice(4, 6).map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAviation;
>>>>>>> e9dbe838e633efbcfbea8b57f4bbfbb8bce6bb5a
