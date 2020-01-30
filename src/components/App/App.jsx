import React, { Fragment } from 'react';
import Searchbar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';
import Hero from '../Hero/Hero';
import './App.css';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Fragment>
      <Hero />
      <div className="App container">
        <Searchbar />
        <UserProfile />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
