import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>MediBED</h2>
      <div className="user-info">
        <img src="https://via.placeholder.com/50" alt="User" />
        <h4>Ahmed Khalid</h4>
        <span>Online</span>
      </div>
      <nav>
        <ul>
          <li><a href="#doctors">Doctors</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
