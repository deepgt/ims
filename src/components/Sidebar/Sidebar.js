import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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
        <div className="menu-head">
          <Link to="/">Dashboard</Link>
        </div>
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
            <li className="submenu-item">
              <Link to="/userform">User</Link>
            </li>
            <li className="submenu-item">
              <Link to="/userdetail">User Detail</Link>
            </li>
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
            <li className="submenu-item">
              <Link to="/customerform">Customer</Link>
            </li>
            <li className="submenu-item">
              <Link to="/customerdetail">Customer Detail</Link>
            </li>
          </ul>
          <li className="menu-item">
            <div className="mitem">
              <Link to="/Nas">NAS</Link>
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          <li className="menu-item">
            <div className="mitem">
              <Link to="/olt">Olt</Link>
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          <li className="menu-item">
            <div className="mitem">
              <Link to="/onus">Onus</Link>
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          <li className="menu-item">
            <div className="mitem">
              <Link to="/Package">Package</Link>
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
          <li className="menu-item">
            <div className="mitem">
              <Link to="/Service">Service</Link>
              <KeyboardDoubleArrowRightIcon />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
