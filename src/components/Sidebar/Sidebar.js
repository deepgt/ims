import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCustomerMenuOpen, setIsCustomerMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleCustomerMenu = () => {
    setIsCustomerMenuOpen(!isCustomerMenuOpen);
  };

  return (
    <>
      {/* <div className="sidebar_and_nav_container"> */}
      <div className="sidebar">
        <Link to="/" >
        <div className="menu-head">
          <SpaceDashboardIcon />
          Dashboard
        </div>
        </Link>
        <ul className="menu">
          <li className="menu-item">
            <div
              className={`mitem ${isUserMenuOpen ? "open" : ""}`}
              onClick={toggleUserMenu}>
              User
              <KeyboardArrowDownIcon />
            </div>
          </li>
          <ul className={`submenu ${isUserMenuOpen ? "open" : ""}`}>
            <Link to="/userform">
              <li className="submenu-item">
                <AccountBoxIcon />
                User
            </li>
            </Link>
            <Link to="/userdetail">
            <li className="submenu-item">
              <AccountBoxIcon />
              User Detail
            </li>
            </Link>
          </ul>
          <li className="menu-item">
            <div
              className={`mitem ${isCustomerMenuOpen ? "open" : ""}`}
              onClick={toggleCustomerMenu}>
              Customer
              <KeyboardArrowDownIcon />
            </div>
          </li>
          <ul className={`submenu ${isCustomerMenuOpen ? "open" : ""}`}>
          <Link to="/customerform">
            <li className="submenu-item">
              <AccountBoxIcon />
              Customer
            </li>
            </Link>
            <Link to="/customerdetail">
              <li className="submenu-item">
                <AccountBoxIcon />
                Customer Detail
              </li>
            </Link>
          </ul>
          <Link to="/Nas">
          <li className="menu-item">
            <div className="mitem">
             NAS
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          </Link>
          <Link to="/olt">
          <li className="menu-item">
            <div className="mitem">
              Olt
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          </Link>
          <Link to="/onus">
          <li className="menu-item">
            <div className="mitem">
              Onus
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          </Link>
          <Link to="/Package">
          <li className="menu-item">
            <div className="mitem">
              Package
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          </Link>
          <Link to="/Service">
          <li className="menu-item">
            <div className="mitem">
              Service
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
