import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, children, onclick, type , size, disabled = false , loading = false }) => {
    return ( <button disabled={disabled || loading} className={`${styles.Button} ${styles[type]}`} onClick={onclick} title={title} >
    
    {children}
 
  </button>);
}
 
export default Button;