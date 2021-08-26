import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="nav-principal">
        <SearchBar
          onSearch={onSearch}
        />
       <div className="title">
            <h3>Api-Clima</h3>
      </div>
       
    </nav>
  );
};

export default Nav;
