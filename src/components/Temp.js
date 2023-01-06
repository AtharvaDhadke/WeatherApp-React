import React, { useEffect, useState } from 'react'
import './style.css'
import Weathercard from './Weathercard';

const Temp = () => {
    const [searchValue, setsearchValue] = useState("mumbai");
    const [tempInfo, setTempInfo] = useState({});
    
    const getWeatherInfo = async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=60ae4433d51decb796f289c06c32072b`;

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
    <>
      <div className="wrap">
    
        <div className="search">
            <input 
                type="search" 
                placeholder="search..."
                autofocus id = "search"
                className="searchTerm"  
                value = {searchValue}
                onChange = {(e)=> setsearchValue(e.target.value)}
            />
            <button 
                type="button" 
                className="searchButton" 
                onClick={getWeatherInfo}>
                Search
            </button>
        </div>
      </div>
      {/* <Navbar /> */}
     <Weathercard {...tempInfo}/>
    </>
  );
};

export default Temp
