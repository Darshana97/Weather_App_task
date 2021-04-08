import React, { useRef, useState } from 'react'
import { Card, Col, Container, Row } from 'reactstrap';
import AppHeader from '../components/AppHeader';
import axios from 'axios';
import WeatherCarousel from '../components/weatherCarousel/WeatherCarousel';
import { stringify } from 'node:querystring';

function Layout() {

    const [ searchValue, setSearchValue ]=useState('')
    const [ searchResults, setSearchResults ]=useState<any>()
    
    const onSearchBtnClick = async () => {
        console.log("Value", searchValue)
        const URL='https://api.openweathermap.org/data/2.5/weather'
        const API_KEY='a01dad5fbe80b733d1463ed50a725548'
        const CITY='London'
        const CNT = '7'
        // const data=await axios.get(URL, {
        //     params: {
        //         q: 'London',
        //         cnt: '7',
        //         appid: API_KEY
        //     }
        // })
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=${API_KEY}`)
        // const responseData=await response.json()
        setSearchResults(response)
        console.log("data", response)

    }

    return (
        <div>
            <AppHeader />
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="row justify-content-md-center">
                            <div className="input-group mb-3 w-50">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    onChange={ (e) => setSearchValue(e.target.value) }/>
                                <div className="input-group-append">
                                    <button onClick={()=>{onSearchBtnClick()}} className="btn btn-outline-secondary" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="card" style={ { width: "18rem" } }>
                                {/* <img src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg" className="card-img-top" alt="image"/> */}
                                <div className="card-body">
                                    { console.log("SS", searchResults?.data.current.weather[0].icon)}
                                    <h4 className="card-title">{ searchResults?.data.timezone }</h4>
                                    <img src={ `http://openweathermap.org/img/wn/${searchResults?.data.current.weather[0].icon}@2x.png` } />
                                    <p className="card-text">
                                        <h5>{ `Weather : ${searchResults?.data.current.weather[ 0 ].main}` }</h5>
                                        <h5>{ `Description : ${searchResults?.data.current.weather[0].description}`}</h5>
                                        <h5>{ `Temprature : ${searchResults?.data.current.temp} F` }</h5>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <WeatherCarousel data={searchResults} />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
