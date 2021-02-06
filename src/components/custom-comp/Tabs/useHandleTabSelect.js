
import { useState, useEffect } from 'react';

const useHandleTabSelect = (TabsData , selectedTab , setnavControlObject) => {

    const [selectedTabContent, setSelectedTabContent] = useState({});

    useEffect(() => {

        const indexOfCurrentlySelected = TabsData.findIndex(x => x.id === selectedTab)

        const isAllowedToNavigateLeft = indexOfCurrentlySelected > 0;
        const isAllowedToNavigateRight = indexOfCurrentlySelected === TabsData.length - 1;

        setnavControlObject({
            left: !isAllowedToNavigateLeft,
            right: isAllowedToNavigateRight
        })

    }, [selectedTab, TabsData])



    useEffect(() => {

        setSelectedTabContent(TabsData.find(x => x.id === selectedTab))

    }, [selectedTab, TabsData]);



    return ([selectedTabContent, setSelectedTabContent]  );
}

export default useHandleTabSelect;
