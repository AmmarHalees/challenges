import React from 'react';


const TabItem = ({id , title, content , cta , image_cap , image_url , social_links}) => {
    return ( 

        <div>

            <h3>{title}</h3>
            <p>{content}</p>


        </div>

     );
}
 
export default TabItem;