import React, { useState } from "react";
import './searchBar.css' 

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div className="cont-form">
        <input
          className=""
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input className="" type="submit" value="Agregar" />
      </div>
    </form>
  );
}
