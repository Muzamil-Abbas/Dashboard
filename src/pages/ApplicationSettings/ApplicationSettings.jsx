import React, { useState } from 'react';
import '../../styles/ApplicationSettings.css';

const ApplicationSettings = () => {
  const [settings, setSettings] = useState({
    general: true,
    preferences: false,
    notifications: false,
    security: false
  });

  const toggleSection = (section) => {
    setSettings((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Application Settings</h1>

      <div className="settings-section">
        <button className={`settings-toggle ${settings.general ? 'active' : ''}`} onClick={() => toggleSection('general')}>
          General Settings
        </button>
        {settings.general && (
          <div className="settings-content">
            <p>Manage application-wide settings such as language, time zone, and default settings.</p>
          </div>
        )}
      </div>

      <div className="settings-section">
        <button className={`settings-toggle ${settings.preferences ? 'active' : ''}`} onClick={() => toggleSection('preferences')}>
          User Preferences
        </button>
        {settings.preferences && (
          <div className="settings-content">
            <p>Adjust your personal preferences such as theme, layout, and notification preferences.</p>
          </div>
        )}
      </div>

      <div className="settings-section">
        <button className={`settings-toggle ${settings.notifications ? 'active' : ''}`} onClick={() => toggleSection('notifications')}>
          Notifications
        </button>
        {settings.notifications && (
          <div className="settings-content">
            <p>Configure your notification settings to receive alerts via email, SMS, or in-app notifications.</p>
          </div>
        )}
      </div>

      <div className="settings-section">
        <button className={`settings-toggle ${settings.security ? 'active' : ''}`} onClick={() => toggleSection('security')}>
          Security
        </button>
        {settings.security && (
          <div className="settings-content">
            <p>Manage security settings such as password changes, two-factor authentication, and account recovery.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationSettings;
