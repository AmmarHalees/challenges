import React from 'react';
import styles from './Hero.module.css';
import { ReactComponent as TwitterLogo } from '../../../assets/icons/twitter.svg';
import { ReactComponent as FacebookLogo } from '../../../assets/icons/facebook.svg';
import { ReactComponent as IGLogo } from '../../../assets/icons/instagram.svg';
import Overlay from '../../library-comp/Overlay/Overlay';


const Hero = () => {
    return (<section className={styles.Hero}>

        <div className={`${styles.innerHero} _layout _container`}>
            <h1>Night Trips</h1>
            <h2>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</h2>
            <p>Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.</p>
        </div>

        <div className={`${styles.Actions} _container`}>


            <button className={styles.scrollButton}>

                <p className={styles.scrollText}>scroll</p>
                <div className={styles.Line}></div>

            </button>

            <div className={`${styles.SocialIcons} _layout`}>

                <a href="facebook.com"><FacebookLogo /></a>
                <a href="twitter.com"><TwitterLogo /></a>
                <a href="instagram.com"><IGLogo /></a>

            </div>

        </div>

        <Overlay background='linear-gradient(180deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)' />


    </section>
    );
}

export default Hero;