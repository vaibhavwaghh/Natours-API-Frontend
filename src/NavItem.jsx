import React from "react";

const NavItem = ({ link, text, icon, active }) => (
  <li className={active ? "side-nav--active" : ""}>
    <a href={link}>
      <svg>
        <use xlinkHref={`img/icons.svg#icon-${icon}`}></use>
      </svg>
      {text}
    </a>
  </li>
);

export default NavItem;
