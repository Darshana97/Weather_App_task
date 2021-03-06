import { useState } from 'react'
import AppHeader from '../components/AppHeader';
import axios from 'axios';
import WeatherCarousel from '../components/weatherCarousel/WeatherCarousel';


function Layout() {

    const [ searchValue, setSearchValue ]=useState('')
    const [ searchResults, setSearchResults ]=useState<any>()
    
    const onSearchBtnClick = async () => {

        const URL='https://api.openweathermap.org/data/2.5/weather'
        const API_KEY='a01dad5fbe80b733d1463ed50a725548'
        const CITY='London'
        const CNT = '7'      
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=${API_KEY}`)
        
        setSearchResults(response)

    }

    return (
        <div>
            <AppHeader />
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="row justify-content-md-center">
                            <div className="input-group mb-3 w-50"  style={{marginTop:'3rem'}}>
                                <input                                 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your city"
                                    onChange={ (e) => setSearchValue(e.target.value) }/>
                                <div className="input-group-append">
                                    <button onClick={()=>{onSearchBtnClick()}} className="btn btn-outline-secondary btn-success" style={{color:'white'}} type="button">Go <img src="https://img.icons8.com/material-outlined/18/ffffff/circled-play.png"/></button>
                                </div>
                            </div>
                        </div>
                        
                        { searchResults && <div>
                            <div className="row justify-content-md-center">
                                <div className="card"  >
                                    <div className="card-body">
                                        <div className="col">
                                            <h4 className="card-title">{ searchResults?.data.timezone }</h4>
                                            <div className="col justify-content-md-center">
                                            <img className="" style={{padding:'20%'}} src={ `http://openweathermap.org/img/wn/${searchResults?.data.current.weather[0].icon}@2x.png` } />
                                            </div> 
                                            <p className="card-text">
                                                <h6><img src="https://img.icons8.com/fluent/30/000000/sad-cloud.png"/> { `Weather : ${searchResults?.data.current.weather[ 0 ].main} ` }</h6>
                                                <h6><img src="https://img.icons8.com/office/30/000000/create-new.png"/> { `Description : ${searchResults?.data.current.weather[0].description}`}</h6>
                                                <h6><img src="https://img.icons8.com/office/30/000000/temperature-sensitive.png"/>{ `Temprature : ${searchResults?.data.current.temp} ??F` }</h6>
                                                <h6><img src="https://img.icons8.com/color/30/000000/snow--v1.png"/> { `Humidity : ${searchResults?.data.current.humidity}%` }</h6>
                                                <h6><img src="https://img.icons8.com/ultraviolet/30/000000/barometer-gauge.png"/> { `Pressure : ${searchResults?.data.current.pressure}hPa` }</h6>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <WeatherCarousel data={searchResults} />
                            </div>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
