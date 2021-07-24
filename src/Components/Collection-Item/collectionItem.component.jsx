import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem = ({id,name,price,imageUrl}) => (
    <div className="collection-item">
        <div className="collection-image" style = {{ 
            backgroundImage: `url(${imageUrl})`
        }}>

        </div>
        <div className="collection-text">
            <h3 className="item-name">{name}</h3>
            <p className="item-price">{price}</p>
        </div>
    </div>
);

export default CollectionItem;