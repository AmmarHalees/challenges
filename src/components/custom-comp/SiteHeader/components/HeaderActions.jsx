import React from 'react';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg';
import Button from '../../../library-comp/Button/Button';
import styles from './HeaderActions.module.css';

const HeaderActions = ({handleMenu}) => {

    

    return (<div className={styles.headerActions}>

        <SearchIcon />

        <Button type="primary" size="large" onclick={handleMenu}>MENU</Button>


    </div>);
}

export default HeaderActions;