import React, { Fragment } from 'react';
import Searchbar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';
import Hero from '../Hero/Hero';

function App() {
  return (
    <Fragment>
      <Hero />
      <div className="App container">
        <Searchbar />
        <UserProfile />
      </div>
    </Fragment>
  );
}

export default App;
