import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faAngleDown, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { languages } from '../../utils/languages';
import '../../styles/Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState(languages[0].name);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguages(false);
  };

  return (
    <header className="header">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search for anything here..." className="search-input" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="first-element">
        <div className="lang-dropdown">
          <div onClick={() => setShowLanguages(!showLanguages)}>
            {language}
            <FontAwesomeIcon icon={faAngleDown} className="dropdown--icon" />
          </div>
          {showLanguages && (
            <div className="dropdown-menus">
              {languages.map((lang) => (
                <div
                  key={lang.id}
                  className="dropdown-items"
                  onClick={() => handleLanguageSelect(lang.name)}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="morning">
          <div className="morning-text">
            <p>
              <FontAwesomeIcon icon={faSun} className="sun-icon" />
              Good Morning
            </p>
            <div className="date-time-container">
              <span>{formattedDate}</span>
              <span> {formattedTime} </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
