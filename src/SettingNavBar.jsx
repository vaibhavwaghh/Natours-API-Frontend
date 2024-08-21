import { useState } from "react";
import NavItem from "./NavItem";

function SettingNavBar({ user }) {
  // State to keep track of the active nav item
  const [activeLink, setActiveLink] = useState(""); // Default active link

  // Handle click event to set the active link
  const handleNavItemClick = (link) => {
    setActiveLink(link);
  };
  console.log("HA AHE USER CHA ROLE", user.role);

  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <NavItem
          link="/account-settings"
          text="Settings"
          icon="settings"
          active={activeLink === "/account-settings"}
          onClick={() => handleNavItemClick("/account-settings")}
        />
        <NavItem
          link="/my-bookings"
          text="My Bookings"
          icon="briefcase"
          active={activeLink === "/my-bookings"}
          onClick={() => handleNavItemClick("/my-bookings")}
        />
        <NavItem
          link="#"
          text="My reviews"
          icon="star"
          active={activeLink === "#"}
          onClick={() => handleNavItemClick("#")}
        />
        <NavItem
          link="#"
          text="Billing"
          icon="credit-card"
          active={activeLink === "#"}
          onClick={() => handleNavItemClick("#")}
        />
      </ul>

      {user?.role === "admin" && (
        <div className="admin-nav">
          <h5 className="admin-nav__heading">Admin</h5>
          <ul className="side-nav">
            <NavItem
              link="#"
              text="Manage tours"
              icon="map"
              active={activeLink === "#"}
              onClick={() => handleNavItemClick("#")}
            />
            <NavItem
              link="#"
              text="Manage users"
              icon="users"
              active={activeLink === "#"}
              onClick={() => handleNavItemClick("#")}
            />
            <NavItem
              link="#"
              text="Manage reviews"
              icon="star"
              active={activeLink === "#"}
              onClick={() => handleNavItemClick("#")}
            />
            <NavItem
              link="#"
              text="Manage bookings"
              icon="briefcase"
              active={activeLink === "#"}
              onClick={() => handleNavItemClick("#")}
            />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SettingNavBar;
