import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const filteredCountries = data.filter((country) => {
        const countryName = country.country ? country.country.toLowerCase() : ''; // Updated to use "country"
        const capitalName = country.capital ? country.capital.toLowerCase() : ''; 

        return (
          countryName.includes(searchTerm.toLowerCase()) ||
          capitalName.includes(searchTerm.toLowerCase())
        );
      });

      setFilteredData(filteredCountries);
    }
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by country or capital..."
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.country || item.capital}>
              {`${item.country || 'Unknown'} - ${item.capital || 'Unknown'}`}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
