import React from 'react';

const Branding = ({ branding }) => {
  return (
    <section className="branding-section">
      <h3>Branding</h3>
      <div className="section-content">
        <p><strong>Pharmacy Name:</strong> {branding.pharmacyName}</p>
        <p><strong>Pharmacy ID:</strong> {branding.pharmacyID}</p>
      </div>
    </section>
  );
};

export default Branding;
