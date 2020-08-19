import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src="Logo.svg" alt="Logo" className={styles.logo} />
    </div>
  );
};

export default Navbar;
