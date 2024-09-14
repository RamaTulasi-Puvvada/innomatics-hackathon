import React from 'react';
import SearchBar from './Searchbar';
import countries from './countries.json';

const App = () => {
  return (
    <div>
      <h1>Country Search</h1>
      <SearchBar data={countries} />
    </div>
  );
};

export default App;
