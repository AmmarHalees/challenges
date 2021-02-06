import React, { useEffect, useState } from 'react';
import TabItem from '../TabItem/TabItem';
import styles from './Tabs.module.css';


const Tabs = ({ TabsData  }) => {


    const [selectedTab, setSelectedTabIndex] = useState("1");

    function handleTabSelect(id) {

        setSelectedTabIndex(id);

    }

    const [selectedTabContent, setSelectedTabContent] = useState({});

    useEffect(() => {

        setSelectedTabContent(TabsData.find(x => x.id === selectedTab))

    }, [selectedTab, TabsData]);

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

                <TabItem title={title} id={id} content={content} image_cap={image_cap} image_url={image_url} social_links={social_links} cta = {cta} />

            </div>

        </div>

    );
}

export default Tabs;


















// function renderTabContent(selected) {

//     switch (selected) {

//         case 'Basic': return <Basic />;

//         case 'Security': return <Security />;

//         case 'Notifications': return <Notifications />;


//         default: return <div>Nothing</div>
//     }

// }


//     const Tabs = ({ selected }) => {

//         return (

//             <div style={{ padding: '0rem  1rem 1rem 1rem' }}>

//                 {renderTabContent(selected)}

//             </div>


//         )
//     }

// export default Tabs;