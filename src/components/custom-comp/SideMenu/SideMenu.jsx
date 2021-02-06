import React from 'react';
import styles from './SideMenu.module.css';
import { ReactComponent as XICON } from '../../../assets/icons/x.svg';


const SideMenu = ({ isOpen ,handleMenu }) => {
    return (<div className={`${styles.SideMenu} ${isOpen ? `${styles.open} ${styles.animate}` : ''}`}>
{/* 
        <button onClick={handleMenu}>

            <XICON />
        </button> */}

    </div>);
}

export default SideMenu;