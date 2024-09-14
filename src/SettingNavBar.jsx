import { useState } from "react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

function SettingNavBar({ user }) {
  // State to keep track of the active nav item
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Handle click event to set the active link

  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <NavItem
          link="/account-settings"
          text="Settings"
          icon="settings"
          active={activeLink === "/account-settings"}
        />
        <NavItem
          link="/my-bookings"
          text="My Bookings"
          icon="briefcase"
          active={activeLink === "/my-bookings"}
        />
        {/* <NavItem
          link="#"
          text="My reviews"
          icon="star"
          active={activeLink === "#"}
        />
        <NavItem
          link="#"
          text="Billing"
          icon="credit-card"
          active={activeLink === "#"}
        /> */}
      </ul>
      {/* 
      {user?.role === "admin" && (
        <div className="admin-nav">
          <h5 className="admin-nav__heading">Admin</h5>
          <ul className="side-nav">
            <NavItem
              link="#"
              text="Manage tours"
              icon="map"
              active={activeLink === "#"}
            />
            <NavItem
              link="#"
              text="Manage users"
              icon="users"
              active={activeLink === "#"}
            />
            <NavItem
              link="#"
              text="Manage reviews"
              icon="star"
              active={activeLink === "#"}
            />
            <NavItem
              link="#"
              text="Manage bookings"
              icon="briefcase"
              active={activeLink === "#"}
            />
          </ul>
        </div>
      )} */}
    </nav>
  );
}

export default SettingNavBar;
