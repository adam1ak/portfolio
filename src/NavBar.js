import React from "react";

function NavBar() {
  return (
    <nav>
        <div className="nav-logo">
            <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"></img>
        </div>
        <div className="nav-links">
            <a href="#about">01. <span>About</span></a>
            <a href="#experience">02. <span>Experience</span></a>
            <a href="#projects">03. <span>Projects</span></a>
            <a href="#contact">04. <span>Contact</span></a>
            <button>Resume</button>
        </div>
        <div className="nav-burger">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" pointer height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div>
    </nav>
  );
}

export default NavBar;
