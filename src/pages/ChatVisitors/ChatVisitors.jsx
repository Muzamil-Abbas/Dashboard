import React from 'react';
import '../../styles/ChatVisitors.css';

const ChatVisitors = () => {
  const visitors = [
    {
      name: 'John Doe',
      lastMessage: 'Can you help me with my order?',
      timestamp: '2024-07-31 14:32',
    },
    {
      name: 'Jane Smith',
      lastMessage: 'I have a question about your services.',
      timestamp: '2024-07-31 13:15',
    },
    {
      name: 'Alice Johnson',
      lastMessage: 'Looking for product recommendations.',
      timestamp: '2024-07-30 16:45',
    },
    {
      name: 'Bob Brown',
      lastMessage: 'Where can I find your return policy?',
      timestamp: '2024-07-30 11:20',
    },
    {
      name: 'Emily Davis',
      lastMessage: 'Need assistance with a refund.',
      timestamp: '2024-07-29 09:10',
    },
    {
      name: 'Michael Lee',
      lastMessage: 'Query about delivery status.',
      timestamp: '2024-07-28 15:35',
    },
    {
      name: 'Sarah Wilson',
      lastMessage: 'Interested in bulk purchase options.',
      timestamp: '2024-07-27 12:00',
    },

  ];

  const handleRefresh = () => {
    alert('Chat list refreshed');
  };

  const handleViewChat = (visitorName) => {
    alert(`Viewing chat for ${visitorName}`);
  };

  return (
    <div className="chat-visitors-container">
      <h3>Chat with Visitors</h3>
      <div className="chat-header">
        <h4>Ongoing Chats</h4>
        <button className="refresh-button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <div className="chat-list">
        {visitors.length === 0 ? (
          <p>No ongoing chats at the moment.</p>
        ) : (
          visitors.map((visitor, index) => (
            <div key={index} className="chat-item">
              <div className="chat-info">
                <h5>{visitor.name}</h5>
                <p>{visitor.lastMessage}</p>
              </div>
              <span className="chat-timestamp">{visitor.timestamp}</span>
              <button
                className="view-button"
                onClick={() => handleViewChat(visitor.name)}
              >
                View Chat
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatVisitors;
