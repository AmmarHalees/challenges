import React from 'react';
import styles from './AppOverlay.module.css';

const AppOverlay = ({isOpen}) => {
    return (  <div className={`${styles.AppOverlay} ${isOpen? styles.open : ''}`}>


    </div>);
}
 
export default AppOverlay;

