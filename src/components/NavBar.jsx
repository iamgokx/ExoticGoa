import React from "react";
import { Link } from "react-router";
import styles from "../styles/Nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/public/logos/exotic-goa-nav-logo.png";
import { motion } from "framer-motion";
function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}>
      <div className={styles.hamburgerMenuContainer}>
        <RxHamburgerMenu className={styles.menuIcon} />
      </div>

      <div className={styles.navlinksContainer}>
        <Link className={styles.link} to={"/"}>
          Home
        </Link>
        {/* <Link className={styles.link} to={"/about-us"}>
          About Us
        </Link> */}
        <Link className={styles.link} to={"/weddings"}>
          Weddings
        </Link>
        <Link className={styles.link} to={"/corporate"}>
          Corporate
        </Link>
       
          <img className={styles.logo} src={logo} alt="exotic-goa-luxury-furniture-logo" />
        
        <Link className={styles.link} to={"/our-services"}>
          Our Services
        </Link>
        <Link className={styles.link} to={"/blogs"}>
          Blogs
        </Link>
        <Link className={[styles.link]} to={"/contact-us"}>
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}

export default NavBar;
