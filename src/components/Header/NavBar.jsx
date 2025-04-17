import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <ul className="bg-black p-5 text-white flex justify-center space-x-4">
        <li>
          <Link to="/">Create Tolet</Link>
        </li>
        <li>
          <Link to="/tolets">Tolets</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
