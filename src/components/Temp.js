import React, { useEffect, useState } from 'react'
import './style.css'

const Temp = () => {
    const [searchValue, setsearchValue] = useState("Mumbai");
    const [tempInfo, setTempInfo] = useState({});
    
    const getWeatherInfo = async ()=>{
        try {
            // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=60ae4433d51decb796f289c06c32072a`;

            let res = await fetch(url);
            let data= await res.json();

            const { temp, humidity,pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name } = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            // console.log(data);

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getWeatherInfo();
    },[]);
 
    return (
    <div>
      <div className="wrap">
        <div className="search">
            <input type="search" 
            placeholder="search"
            autofocus id = "search"
            className="searchTerm"  
            value = {searchValue}
            onChange = {(e)=> setsearchValue(e.target.value)}
            />
            <button type="button" className="searchButton" onClick={getWeatherInfo}>
                Search
            </button>
        </div>
      </div>

      <article className='widget'>
        <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}> </i>
        </div>

        <div className="weatherInfo">
            <div className="temperature">
                <span>25.5&deg;</span>
            </div>

            <div className="description">
                <div className="weatherCOndition">Sunny</div>
                <div className="place">
                    Mumbai, India
                </div>
            </div>

        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        {/* Our 4 column divided section */}
        <div className="extra-temp">

            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p><i className={"wi wi-sunset"}></i></p>
                    <p classname="extra-info-leftside">
                        19:19 PM <br/>
                        Sunset
                    </p>
                </div>

                <div className="two-sided-section">
                    <p><i className={"wi wi-rain"}></i></p>
                    <p classname="extra-info-leftside">
                        19:19 PM <br/>
                        Sunset
                    </p>
                </div>
            </div>

            <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p classname="extra-info-leftside">
                            19:19 PM <br/>
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p classname="extra-info-leftside">
                            19:19 PM <br/>
                            Sunset
                        </p>
                    </div>
                </div>
            </div>
      </article>
    </div>
  )
}

export default Temp
