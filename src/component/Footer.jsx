import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div style={styles.section}>
          <h4>Quick Links</h4>
          <ul style={styles.links}>
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4>Contact Info</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div style={styles.socialMedia}>
        <a>Facebook</a> | 
        <a>Twitter</a> | 
        <a>Instagram</a>
      </div>

      <div style={styles.copyRight}>
        <p>&copy; {new Date().getFullYear()} Lorem Ipsum Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px 0',
    textAlign: 'center',
    fontSize: '14px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 20px',
  },
  section: {
    maxWidth: '300px',
    margin: '10px 0',
  },
  links: {
    listStyle: 'none',
    padding: 0,
  },
  socialMedia: {
    marginTop: '15px',
  },
  copyRight: {
    marginTop: '20px',
    fontSize: '12px',
    borderTop: '1px solid #7f8c8d',
    paddingTop: '10px',
  },
};

export default Footer;
