import React from 'react';
import styles from './SideMenu.module.css';


const SideMenu = ({ isOpen ,handleMenu }) => {
    return (<div className={`${styles.SideMenu} ${isOpen ? `${styles.open} ${styles.animate}` : ''}`}> </div>);
}

export default SideMenu;