import React from 'react';

const OwnerDetails = ({ owner }) => {
  return (
    <section className="owner-details-section">
      <h3>Owner Details</h3>
      <div className="section-content">
        <p><strong>Owner Name:</strong> {owner.ownerName}</p>
        <p><strong>Email:</strong> {owner.email}</p>
      </div>
    </section>
  );
};

export default OwnerDetails;
