import React from 'react';
import styles from './TabItem.module.css';
import Button from '../../library-comp/Button/Button';
import { ReactComponent as LeftIcon } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as RightIcon } from '../../../assets/icons/arrow-right.svg';
import { ReactComponent as TwitterLogo } from '../../../assets/icons/twitter.svg';
import { ReactComponent as FacebookLogo } from '../../../assets/icons/facebook.svg';
import { ReactComponent as IGLogo } from '../../../assets/icons/instagram.svg';
import DotsImageSRC from '../../../assets/images/dots.svg';

const TabItem = ({ id, title, content, cta, image_cap, image_url, social_links = {}, handleArrowNavigate, navControlObject: { left: isLeftDisabled, right: isRightDisabled } }) => {


    return (

        <div className={styles.container}>

            <div className={styles.left}>

                <img src={image_url} className={styles.mainimage} alt={title} />
                <div className={styles.floating}>

                    <div className={styles.line}></div>
                    <p className={styles.number}>{`0${id}.`}</p>
                    <p className={styles.image_cap}>{image_cap}</p>


                </div>
                <img className={styles.dots} alt="dots pattern" src={DotsImageSRC} />

                <div className={styles.arrowControls}>

                    <button aria-label="Go to previous slide" disabled={isLeftDisabled} onClick={() => handleArrowNavigate('left')}>
                        <LeftIcon />
                    </button>

                    <button aria-label="Go to next slide" disabled={isRightDisabled} onClick={() => handleArrowNavigate('right')}>
                        <RightIcon />
                    </button>

                </div>



            </div>

            <div className={styles.right}>

                <h3>{title}</h3>

                <div className={`${styles.SocialIconsCotainer}`}>


                    <p>
                        SHARE IT:                    </p>

                    <div className={`${styles.SocialIcons} _layout`}>

                    <a title="instagram profile" href={social_links.instagram}><IGLogo /></a>
                    <a title="facebook profile"href={social_links.facebook}><FacebookLogo /></a>
                    <a title="twitter profile" href={social_links.twitter}><TwitterLogo /></a>

                    </div>

                    <div className={styles.lineRight}></div>



                </div>

                <p>{content}</p>

                <Button type="primary" size="large" >{cta}</Button>




            </div>


        </div>

    );
}

export default TabItem;