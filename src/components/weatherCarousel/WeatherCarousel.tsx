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
                    <img  src={ `http://openweathermap.org/img/wn/${data.data?.data.daily[ 0 ].weather[ 0 ].icon}@2x.png` } />
                    <p className="legend">
                        
                        Day: { moment().format('dddd') }
                        <br />
                        { data.data?.data.daily[ 0 ].weather[ 0 ].description }
                        <br />
                        Temperature: { data.data?.data.daily[ 0 ].temp.day } °F
                        <br />
                        Humidity: { data.data?.data.daily[ 0 ].humidity }%
                    </p>
                    
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[1].weather[0].icon}@2x.png`} />
                    <p className="legend">
                        Day: { moment().add(1, 'days').format('dddd') }
                        <br/>
                        { data.data?.data.daily[ 1 ].weather[ 0 ].description }
                        <br />
                        Temperature: { data.data?.data.daily[ 1 ].temp.day } °F
                        <br />
                        Humidity: { data.data?.data.daily[ 1 ].humidity }%
                    </p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[2].weather[0].icon}@2x.png`} />
                    <p className="legend">
                        Day: { moment().add(2, 'days').format('dddd') }
                        <br/>
                        { data.data?.data.daily[ 2 ].weather[ 0 ].description }
                        <br />
                        Temperature: { data.data?.data.daily[ 2 ].temp.day } °F
                        <br />
                        Humidity: { data.data?.data.daily[ 2 ].humidity }%
                    </p>
                </div>
                <div>
                   <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[3].weather[0].icon}@2x.png`} />
                    <p className="legend">
                        Day: { moment().add(3, 'days').format('dddd') }
                        <br/>
                        { data.data?.data.daily[ 3 ].weather[ 0 ].description }
                        <br />
                        Temperature: { data.data?.data.daily[ 3 ].temp.day } °F
                        <br />
                        Humidity: { data.data?.data.daily[ 3 ].humidity }%
                    </p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.data?.data.daily[4].weather[0].icon}@2x.png`} />
                    <p className="legend">
                        Day: { moment().add(4, 'days').format('dddd') }
                        <br/>
                        { data.data?.data.daily[ 4 ].weather[ 0 ].description }
                        <br />
                        Temperature: { data.data?.data.daily[ 4 ].temp.day } °F
                        <br />
                        Humidity: { data.data?.data.daily[ 4 ].humidity }%
                    </p>
                </div>                              
            </Carousel>
        </div>
    )
}

export default WeatherCarousel
