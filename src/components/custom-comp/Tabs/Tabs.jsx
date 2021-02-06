import React, {useState } from 'react';
import TabItem from '../TabItem/TabItem';
import styles from './Tabs.module.css';
import useHandleTabSelect from './useHandleTabSelect';


const Tabs = ({ TabsData }) => {

    const [navControlObject , setnavControlObject] = useState({

        left: true,
        right:true

    });

    const [selectedTab, setSelectedTabIndex] = useState("1");

    function handleTabSelect(id) {

        setSelectedTabIndex(id);

    }

    const [selectedTabContent, setSelectedTabContent]  = useHandleTabSelect(TabsData , selectedTab , setnavControlObject)

    function handleArrowNavigate(direction) {

        const indexOfCurrentlySelected = TabsData.findIndex(x => x.id === selectedTab)

        const isAllowedToNavigateLeft = indexOfCurrentlySelected > 0;
        const isAllowedToNavigateRight = indexOfCurrentlySelected < TabsData.length - 1;


        switch (direction) {

            case 'left': {

                if (isAllowedToNavigateLeft) {

                    setSelectedTabIndex(`${Number(selectedTab) - 1}`);

                } else {

                    return

                }

                break;

            }
            case 'right': {

                if (isAllowedToNavigateRight) {

                    setSelectedTabIndex(`${Number(selectedTab) + 1}`);

                } else {

                    return

                }
                break;

            }

            default: return;

        }




    }


    const { id, title, content, cta, image_cap, image_url, social_links } = selectedTabContent;


    return (

        <div>

            {/* Tabs Head */}

            <div className={styles.Tabs}>

                {TabsData.map(({ title, id }) => {

                    return <button key={id} className={`${styles.tabitem} ${selectedTab === id ? styles.selected : ''}`} disabled={selectedTab === id ? true : false} onClick={() => handleTabSelect(id)}>{title}</button>

                })}

            </div>

            {/* Tabs Body */}

            <div className={styles.tabsContainer}>

                <TabItem navControlObject={navControlObject} title={title} handleArrowNavigate={handleArrowNavigate} id={id} content={content} image_cap={image_cap} image_url={image_url} social_links={social_links} cta={cta} />

            </div>

        </div>

    );
}

export default Tabs;
