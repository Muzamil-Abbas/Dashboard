import React from 'react';

const PageActions = ({ pages }) => {
  return (
    <section className="page-actions-section">
      <h3>Page Actions</h3>
      <div className="section-content">
        {pages.map((page, index) => (
          <div key={index}>
            <h4>{page.name}</h4>
            <ul>
              {page.subPages.map((subPage, subIndex) => (
                <li key={subIndex}>{subPage}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageActions;
