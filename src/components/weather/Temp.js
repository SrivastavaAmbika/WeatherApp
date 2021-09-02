import React, {useState,useEffect} from 'react';
import Weather from './Weather';
import './style.css';

const Temp = () => {
const [searchValue, setSearchValue]= useState("Delhi");
const [tempInfo,setTempInfo]= useState({});
const  getWeatherInfo = async ()=>{
    try {
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4b042471ad1d81f13cada0ecfe628215` ;  
     const res = await fetch(url);
     const data = await res.json();
     const {temp,humidity,pressure} = data.main;
     const {main:weathermood} = data.weather[0];
     const {name} = data;
     const {speed} = data.wind;
     const{country,sunset}=data.sys;
     const myWeatherInfo={
        temp,
        humidity,
        pressure ,
        weathermood,
        name,
        speed,  
        country,
        sunset
     };
     setTempInfo(myWeatherInfo)
     console.log(temp,humidity,pressure);
    } catch (error) {
        console.log(error);
    }

}
useEffect(() => {
    getWeatherInfo();
}, [])


    return (
       <>
        <div className="wrap">
           <div className="search">
               <input type="search" 
                   placeholder="city"
                   autoFocus
                   id="search"
                   className="searchTerm"
                   value={searchValue}
                   onChange={(e)=>setSearchValue(e.target.value)}
               />
               <button className="searchButton" type="button" onClick={getWeatherInfo}>Serach</button>
           </div> 
        </div>
        <Weather  tempInfo = {tempInfo} />
                    </>
    )
}

export default Temp;
