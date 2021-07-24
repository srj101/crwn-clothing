import React from 'react';

import SHOP_DATA from './shop.data.js';

import './shop.styles.scss'

import CollectionPrev from '../../CollectionPrev/collectionprev.component.jsx';



class ShopPage extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="Shop-Page">
                {/* <p className="breadcrumb">{window.location.href}</p> */}
                {
                    collections.map(({id , ...otherCollectionProps}) => (
                        <CollectionPrev key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;