import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div class="Logo">
          <img src="/images/brand_logo.png" alt="Logo"></img>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button class="btn">Login</button>
      </nav>
    </div>
  );
}

export default Navbar;
