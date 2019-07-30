import React from 'react';
import './search.style.css';

export const SearchBox = ( {placeholder, handleChange, classStyle} ) => (
    <input  className={classStyle}
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
     />
);