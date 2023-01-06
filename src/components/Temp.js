import React from 'react'
import './style.css'

const Temp = () => {
  return (
    <div>
      <div className="wrap">
        <div className="search">
            <input type="search" 
            placeholder="search"
            autofocus id = "search"
            className="searchTerm"  
            />
            <button type="button" className="searchButton">
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
