import React, { useState } from 'react'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import './weatherCarousel.scss';

function WeatherCarousel() {

    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const itemTemplate = (product: any) => {
        return (
            <div className="product-item">

            </div>
        );
    }

    return (
        <div>
         <div className="card">
               <Carousel value={products} itemTemplate={itemTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions}></Carousel>
            </div>
        </div>
    )
}

export default WeatherCarousel
