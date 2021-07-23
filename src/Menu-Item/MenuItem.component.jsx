import React from 'react';

export const MenuItem = ({title,size}) => (
    <div className={`${size} menu-item`}>
        <div className="content">
            <h3 className="title">
                {title}
            </h3>
            <p>SHOP NOW</p>
        </div>
    </div>
)