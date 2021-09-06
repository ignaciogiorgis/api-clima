import React from "react";
import '../components/ciudad.css';
import {Link} from 'react-router-dom';

export default function Ciudad({city}) {
    
    if(!city){
        return <h2>Elige Tu ciudad Nuevamente</h2>
    }
    return (
            <div className="ciudad">
                    <div className="container-detail">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <p>Temperatura: {city.temp} ºC</p>
                            <p>Clima: {city.weather}</p>
                            <p>Viento: {city.wind} km/h</p>
                            <p>Cantidad de nubes: {city.clouds}</p>
                            <p>Latitud: {city.latitud}º</p>
                            <p>Longitud: {city.longitud}º</p>
                        </div>
                        <Link to="/">
                            <button className="btn btn-primary">Regresar</button>
                        </Link>
                </div>
            </div>
        ) 
    
   

}