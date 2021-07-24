import React from 'react';
import './collectionprev.styles.scss';
import CollectionItem from '../Collection-Item/collectionItem.component';

const CollectionPrev = ({title,items}) => (
    
    <div className="collection-prev">
            <h1 className="collection-title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map(({id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps } />
                ))}
            </div>
    </div>

)

export default CollectionPrev;