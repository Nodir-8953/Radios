import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Item from '../images/item.png'

import Logo from '../images/logo.png'

const Corousel = () => {
    return (
        <>
            <Carousel  showArrows={true} dynamicHeight={true}>
                <div>
                    <img src={Item} />
                    <p className="legend">Legend 1</p>
                </div>
               
            </Carousel>
        </>
    );
}

export default Corousel