import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="container-fluid" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div className="row">
        <input
          className="col-2"
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input className="btn btn-outline-primary col-1 input-group " type="submit" value="Agregar" />
      </div>
    </form>
  );
}
