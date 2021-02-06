import React from 'react';
import styles from './SiteHeader.module.css';
import { ReactComponent as SiteLogo } from '../../../assets/logo/brand-logo.svg';
import HeaderActions from './components/HeaderActions';


const SiteHeader = () => {
    return (<header className={styles.header}>

        <div className={`${styles.innerHeader} _container`}>

            <SiteLogo />

            <HeaderActions />
        </div>


    </header>
    );
}

export default SiteHeader;