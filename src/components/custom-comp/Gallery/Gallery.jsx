import React from 'react';
import styles from './Gallery.module.css';
import JSONdata from '../../../api/GalleryData.json';
import TabItem from '../TabItem/TabItem';
import Tabs from '../Tabs/Tabs';

const Gallery = ({ gallerySectionRef }) => {


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


            {/* {JSONdata.data.map(({id , title, content , cta , image_cap , image_url , social_links}) =>  <TabItem id={id}  title = {title}  content={content}  cta ={cta}  image_cap ={image_cap}  image_url ={image_url}  social_links={social_links} /> )} */}

            {/* {JSONdata.data.map(({ id, title, content, cta, image_cap, image_url, social_links }) => <TabItem title={title} id={id} content={content} image_cap={image_cap} image_url={image_url} social_links={social_links} />)} */}


            <Tabs TabsData={JSONdata.data}/>



        </div>


    </section>);
}

export default Gallery;