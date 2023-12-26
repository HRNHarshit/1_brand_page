import React from "react";
import { Logo } from "../assets/index";

const Navigation = () => {
  return (
    <div className="Navigation container">
      <nav>
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button className="login">Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
