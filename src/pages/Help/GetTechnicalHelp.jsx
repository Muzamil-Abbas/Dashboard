import React from 'react';
import '../../styles/GetTechnicalHelp.css';

const GetTechnicalHelp = () => {
  return (
    <div className="tech-help-container">
      <h1 className="tech-help-title">Technical Support</h1>
      <div className="tech-help-content">
        <section className="tech-help-section">
          <h2 className="section-heading">Support Channels</h2>
          <p className="section-description">
            Our dedicated support team is here to help you. Choose a channel that suits your needs for the quickest assistance.
          </p>
          <div className="support-cards">
            <div className="support-card">
              <h3 className="card-title">Live Chat</h3>
              <p className="card-description">
                Get instant help from our support team through live chat. Available 24/7 for immediate assistance.
              </p>
            </div>
            <div className="support-card">
              <h3 className="card-title">Email Support</h3>
              <p className="card-description">
                Send us an email with your queries or issues. Our team will get back to you within 24 hours.
              </p>
            </div>
            <div className="support-card">
              <h3 className="card-title">Phone Support</h3>
              <p className="card-description">
                Call us for direct and immediate assistance. Available during business hours.
              </p>
            </div>
          </div>
        </section>

        <section className="tech-help-section">
          <h2 className="section-heading">Common Issues</h2>
          <p className="section-description">
            Find solutions to the most common technical issues reported by users. Click on each issue for detailed troubleshooting steps.
          </p>
          <ul className="issues-list">
            <li>
              <strong>Login Issues:</strong> Troubleshooting tips for login problems.
            </li>
            <li>
              <strong>System Errors:</strong> Common system errors and their fixes.
            </li>
            <li>
              <strong>Feature Requests:</strong> How to submit requests for new features and enhancements.
            </li>
            <li>
              <strong>Performance Issues:</strong> Solutions to address and resolve application performance issues.
            </li>
          </ul>
        </section>

        <section className="tech-help-section">
          <h2 className="section-heading">Contact Support</h2>
          <p className="section-description">
            For personalized assistance, reach out to our support team directly using the contact information below.
          </p>
          <div className="contact-info">
            <div className="contact-detail">
              <h3 className="contact-heading">Email:</h3>
              <p className="contact-text">support@pharmaone.com</p>
            </div>
            <div className="contact-detail">
              <h3 className="contact-heading">Phone:</h3>
              <p className="contact-text">+123-456-7890</p>
            </div>
            <div className="contact-detail">
              <h3 className="contact-heading">Live Chat:</h3>
              <p className="contact-text">Available on our website 24/7</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetTechnicalHelp;
