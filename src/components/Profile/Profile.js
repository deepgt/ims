import React, { useState } from 'react';
import './Profile.css'
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Profile = () => {

  const nav = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');
    console.log("logout")
    nav("/login")
  };

  return (
    <div className="user-welcome">
      <div className="user-image" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
        {/* <img src="./assets/images/person01.png" alt="User Avatar" /> */}
        <div>welcome</div>
        <KeyboardArrowDownIcon />
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
