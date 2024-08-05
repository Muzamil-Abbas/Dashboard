import React from 'react';
import Branding from '../../components/configuration/Branding';
import OwnerDetails from '../../components/configuration/OwnerDetails';
import PageActions from '../../components/configuration/PageActions';
import '../../styles/Configurations.css';
import data from '../../data/configurations.json';

const Configurations = () => {
  const { branding, owner, pages } = data;

  return (
    <div className="configurations-container">
      <header className="configurations-header">
        <h2>Configurations</h2>
        <p>Configure your pharmacy application.</p>
      </header>
      <main className="configurations-main">
        <Branding branding={branding} />
        <OwnerDetails owner={owner} />
        <PageActions pages={pages} />
      </main>
      <footer className="configurations-footer">
        <p>Powered by Subash © 2022</p>
        <p>v 1.1.2</p>
      </footer>
    </div>
  );
};

export default Configurations;
