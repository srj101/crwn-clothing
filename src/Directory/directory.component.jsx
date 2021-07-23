import React from 'react';
import { MenuItem } from '../Menu-Item/MenuItem.component';

class Directory extends React.Component {
    constructor (){
        super();

        this.state = {
            sections : [
                {
                    id: '1',
                    title : 'JACKETS'
                },
                {
                    id: '2',
                    title: 'HATS'
                },
                {
                    id: '2',
                    title: 'SNEAKERS'
                },
                {
                    id: '2',
                    title: 'WOMENS',
                    size: 'large'
                },
                {
                    id: '2',
                    title: 'MENS',
                    size: 'large'
                }
            ]
        }
    }

    render(){
        return(
            <div className="menu-container">
                {this.state.sections.map(({id,title,size}) => (
                    <MenuItem key={id} title={title} size={size}/>
                ))}
            </div>
        )
    }

}

export default Directory;