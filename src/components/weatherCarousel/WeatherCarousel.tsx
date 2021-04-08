import React, { useState } from 'react'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import './weatherCarousel.scss';

function WeatherCarousel(data: any) {

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
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img style={{width:'200px',height:'200px'}} src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="darshana" className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">darshana</h4>
                        <h6 className="p-mt-0 p-mb-3">software</h6>
                        <span>UOK</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            { console.log("From Props", data.data?.data.daily)}
          <div className="card">
                <Carousel value={data.data?.data.daily} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={itemTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
            </div>
        </div>
    )
}

export default WeatherCarousel
