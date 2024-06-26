import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "black",
      color: "white",
    },
    toggle: {
      display: "none",
      fontSize: "30px",
      cursor: "pointer",
    },
    logo: {
      padding: "15px 20px",
      // height: '50px'
    },
    mainNav: {
      listStyle: "none",
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
    },
    navItem: {
      padding: "10px",
    },
    navLinks: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <nav style={styles.navbar}>
      <span style={styles.toggle} onClick={toggleNav}>
        &#9776;
      </span>

      <ul
        style={{ ...styles.mainNav, flexDirection: isOpen ? "column" : "row" }}
      >
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLinks}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLinks}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLinks}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
