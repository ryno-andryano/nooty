import React from 'react';
import SearchBar from './SearchBar';

function AppHeader({onSearch}) {
  return (
    <div className="note-app__header">
      <div>
        <a href="/">
          <h1>Nooty</h1>
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default AppHeader;
