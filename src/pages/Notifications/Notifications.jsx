import React from 'react';
import '../../styles/Notifications.css';

const Notifications = () => {
  const notifications = [
    {
      type: 'System Alert',
      message: 'Your password will expire in 5 days. Please update it to maintain account security.',
      date: '2024-07-31',
    },
    {
      type: 'Update',
      message: 'New features have been added to the inventory management system. Check out the latest updates in the release notes.',
      date: '2024-07-30',
    },
    {
      type: 'Message',
      message: 'You have a new message from the admin. Please check your inbox for more details.',
      date: '2024-07-29',
    },
    {
      type: 'Reminder',
      message: 'Monthly report submission is due by the end of this week. Ensure all data is updated.',
      date: '2024-07-28',
    },
    {
      type: 'Promotion',
      message: 'Get 20% off on your next purchase of medical supplies. Offer valid till the end of the month.',
      date: '2024-07-27',
    },
  ];

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <div key={index} className={`notification ${notification.type.toLowerCase().replace(' ', '-')}`}>
          <h3>{notification.type}</h3>
          <p>{notification.message}</p>
          <span className="notification-date">{notification.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
