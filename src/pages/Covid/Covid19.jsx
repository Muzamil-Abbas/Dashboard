import React from 'react';
import '../../styles/Covid19.css';

const Covid19 = () => {
  return (
    <div className="covid-container">
      <h1 className="covid-title">Covid-19 Infromaction</h1>
      <div className="covid-content">
        <section className="covid-section">
          <h2 className="section-heading">Global Overview</h2>
          <p>
            Get the latest global statistics including total cases, recoveries, and deaths. Stay informed about the pandemic's impact worldwide.
          </p>
          <ul className="covid-stats">
            <li>Total Cases: 650,000,000</li>
            <li>Total Recoveries: 620,000,000</li>
            <li>Total Deaths: 30,000,000</li>
          </ul>
        </section>
        <section className="covid-section">
          <h2 className="section-heading">Regional Updates</h2>
          <p>
            Check out the latest updates by region. See how different areas are affected and learn about localized guidelines and restrictions.
          </p>
          <ul className="region-updates">
            <li>North America: 100,000,000 cases</li>
            <li>Europe: 150,000,000 cases</li>
            <li>Asia: 250,000,000 cases</li>
          </ul>
        </section>
        <section className="covid-section">
          <h2 className="section-heading">Prevention & Safety</h2>
          <p>
            Learn about effective prevention measures and safety guidelines to protect yourself and others.
          </p>
          <ul className="prevention-tips">
            <li>Wear masks and practice social distancing.</li>
            <li>Wash hands regularly and use hand sanitizer.</li>
            <li>Stay updated with local health advisories.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Covid19;
