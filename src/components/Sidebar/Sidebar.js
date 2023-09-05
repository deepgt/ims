import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SidebarData from "./SidebarData";
import DnsIcon from '@mui/icons-material/Dns';

const Sidebar = () => {
  const [isDashBoardOpen, setIsDashBoardOpen] = useState(false);

  const [openSubmenus, setOpenSubmenus] = useState({}); // State to track open submenus


  const toggleSubmenu = (index) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [index]: !prevOpenSubmenus[index],
    }));
  };

  const renderSubMenu = (path,subNav, parentIndex) => (
    <ul className="sub-menu-container">
    {subNav.map((item, index) => (
      <Link to={path+item.path}>
      <li key={index} className="sub-menu">
        <div className="sub-menu-item" onClick={() => toggleSubmenu(parentIndex + '-' + index)}>
          {item.icon}
          <h3>{item.title}</h3>
        </div>
        {openSubmenus[parentIndex + '-' + index] && item.subNav && renderSubMenu(item.subNav, parentIndex + '-' + index)}
      </li>
      </Link>
    ))}
  </ul>
  );


  return (
    <>
      {/* <div className="sidebar_and_nav_container"> */}
      <div className="sidebar">
        <div className="menu-head">
          <Link to="/" className="menu-container">
            <DnsIcon />
            <h3>IMS</h3>
          </Link>
        </div>
        <ul className="menu">
          {SidebarData.map((item, index) => (
            <li key={index} className="mitem">
              {!item.subNav && <Link to={item.path} className="link_without_subnav"/>}
              <div className="menu-item" onClick={() => toggleSubmenu(index)}>
                <div className="menu-item-content">
                {item.icon}
                {item.title}
                </div>
                {item.subNav && <KeyboardArrowDownIcon />}
               
              </div>
              {openSubmenus[index] && item.subNav && renderSubMenu(item.path,item.subNav, index)}
            </li>
          ))}


{/*         
        {SidebarData.map((item, index) => (                 
          <li className="menu-item" key={index}>
            <div
              className={`mitem ${isDashBoardOpen ? "open" : ""}`}
              onClick={toggleDashBoardMenu}>
               <span>{item.title}</span>
              {item.subNav && renderSubMenu(item.subNav)}
            </div>
          </li>
           ))} */}
          {/* <ul className={`submenu ${isDashBoardOpen ? "open" : ""}`}>
            <Link to="/userform">
                {subNav.map((item, index) => (             
                <li className="submenu-item" key={index}>
                  <span>{item.title}</span>
                </li>
                  ))}
            </Link> */}
          </ul>
          {/* <li className="menu-item">
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
          </Link>*/}
      </div>
    </>
  );
};
export default Sidebar;
