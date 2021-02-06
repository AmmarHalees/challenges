import React from 'react';
import styles from './TabItem.module.css';
import Button from '../../library-comp/Button/Button';

const TabItem = ({ id, title, content, cta, image_cap, image_url, social_links }) => {
    return (

        <div className={styles.container}>

            <div className={styles.left}>

                <img src={image_url} alt={title} />
                <div className={styles.floating}>

                    <div className={styles.line}></div>
                    <p className={styles.number}>{`0${id}.`}</p>
                    <h4>{image_cap}</h4>

                </div>

            </div>

            <div className={styles.right}>

                <h3>{title}</h3>

                <p>{content}</p>

                <Button type="primary" size="large" >{cta}</Button>
            </div>


        </div>

    );
}

export default TabItem;