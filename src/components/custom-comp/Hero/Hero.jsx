import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (<div className={styles.Hero}>

        <div className={`${styles.innerHero} _layout`}>
            <h1>Night Trips</h1>
            <h2>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</h2>
        </div>

    </div>
    );
}

export default Hero;