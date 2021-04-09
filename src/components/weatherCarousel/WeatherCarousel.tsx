import './weatherCarousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import moment from 'moment';

function WeatherCarousel(data: any) {

    
   

    return (
        <div>
         { console.log("From Props", data.data?.data.daily[2])}
            <Carousel>
                <div>
                    <img src={ `http://openweathermap.org/img/wn/${data.data?.data.daily[ 0 ].weather[ 0 ].icon}@2x.png` } />
                    <p className="legend">{ data.data?.data.daily[ 0 ].weather[ 0 ].description }
                        <br />
                        Humidity: { data.data?.data.daily[ 0 ].humidity }
                        <br />
                        Humidity: { data.data?.data.daily[ 0 ].humidity }
                        <br />
                        Humidity: { moment().format('dddd') }
                    </p>
                    
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[1].weather[0].icon}@2x.png`} />
                    <p className="legend">{ data.data?.data.daily[ 1 ].weather[ 0 ].description }
                        <br />
                        Humidity: { data.data?.data.daily[ 1 ].humidity }
                        <br />
                        Humidity: { data.data?.data.daily[ 1 ].humidity }
                        <br />
                        Humidity: { moment().add(1, 'days').format('dddd') }
                    </p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[2].weather[0].icon}@2x.png`} />
                    <p className="legend">{ data.data?.data.daily[ 2 ].weather[ 0 ].description }
                        <br />
                        Humidity: { data.data?.data.daily[ 2 ].humidity }
                        <br />
                        Humidity: { data.data?.data.daily[ 2 ].humidity }
                        <br />
                        Humidity: { moment().add(2, 'days').format('dddd') }
                    </p>
                </div>
                <div>
                   <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[3].weather[0].icon}@2x.png`} />
                    <p className="legend">{ data.data?.data.daily[ 3 ].weather[ 0 ].description }
                        <br />
                        Humidity: { data.data?.data.daily[ 3 ].humidity }
                        <br />
                        Humidity: { data.data?.data.daily[ 3 ].humidity }
                        <br />
                        Humidity: { moment().add(3, 'days').format('dddd') }
                    </p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[4].weather[0].icon}@2x.png`} />
                    <p className="legend">{ data.data?.data.daily[ 4 ].weather[ 0 ].description }
                        <br />
                        Humidity: { data.data?.data.daily[ 4 ].humidity }
                        <br />
                        Humidity: { data.data?.data.daily[ 4 ].humidity }
                        <br />
                        Humidity: { moment().add(4, 'days').format('dddd') }
                    </p>
                </div>                              
            </Carousel>
        </div>
    )
}

export default WeatherCarousel
