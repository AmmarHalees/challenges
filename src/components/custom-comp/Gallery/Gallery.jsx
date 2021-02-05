import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({gallerySectionRef}) => {
    return (<section ref={gallerySectionRef} className={`${styles.Gallery} _container`}>


        <div className={styles.innerGallery}>

            <header className={styles.header}>

                <h2>
                    Pick your trip
                </h2>

                <p>

                    Our team put together some trips to you to discover,
                    feel free to discover each of them.
                </p>

            </header>


            


        </div>


    </section>);
}

export default Gallery;