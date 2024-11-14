import React from 'react';
import Logo from './log.png';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Logo and Description */}
        <div style={styles.logoSection}>
          <img
            src={Logo}
            alt="NITC Alumni Portal Logo"
            style={styles.logo}
          />
          <p style={styles.description}>
            NIT Calicut Alumni Portal - Reconnect, Relive, and Reignite. Join our network to stay connected with fellow alumni.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.linksSection}>
          <h3 style={styles.linkHeader}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/events" style={styles.link}>Events</a></li>
            <li><a href="/blogs" style={styles.link}>Blogs</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div style={styles.contactSection}>
          <h3 style={styles.linkHeader}>Contact Us</h3>
          <p style={styles.contactItem}>NIT Calicut, Kozhikode, Kerala, India</p>
          <p style={styles.contactItem}>Phone: +91 495 228 6106</p>
          <p style={styles.contactItem}>Email: alumni@nitc.ac.in</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div style={styles.socialMedia}>
        <a href="https://www.facebook.com" style={styles.socialIcon}>Facebook</a>
        <a href="https://www.twitter.com" style={styles.socialIcon}>Twitter</a>
        <a href="https://www.linkedin.com" style={styles.socialIcon}>LinkedIn</a>
        <a href="https://www.instagram.com" style={styles.socialIcon}>Instagram</a>
      </div>

      {/* Footer Bottom Text */}
      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} NIT Calicut Alumni Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#fef7e5', // Light background to match navbar color
    color: '#2f234f', // Dark text color for readability
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for separation
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoSection: {
    maxWidth: '250px',
    textAlign: 'left',
  },
  logo: {
    width: '70px',
    height: '70px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#574c4c',
  },
  linksSection: {
    textAlign: 'left',
  },
  linkHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2f234f',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#2f234f', // Consistent with main text color
    fontSize: '14px',
    textDecoration: 'none',
    marginBottom: '8px',
    display: 'block',
  },
  contactSection: {
    textAlign: 'left',
  },
  contactItem: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#574c4c',
  },
  socialMedia: {
    marginTop: '20px',
  },
  socialIcon: {
    margin: '0 10px',
    color: '#2f234f',
    fontSize: '14px',
    textDecoration: 'none',
  },
  footerBottom: {
    borderTop: '1px solid #574c4c',
    marginTop: '20px',
    paddingTop: '10px',
  },
  copyright: {
    fontSize: '14px',
    color: '#574c4c',
  },
};

export default Footer;
