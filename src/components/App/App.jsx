import React, { Fragment } from 'react';
import Searchbar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';
import Hero from '../Hero/Hero';
import './App.css';
import Footer from '../Footer/Footer';
import RepositoryDetail from '../RepositoryDetail/RepositoryDetail';
import Errors from '../Errors/Errors';
import LoaderContainer from '../LoaderContainer/LoaderContainer';

const App = props => {
  return (
    <Fragment>
      <Hero />
      <div className="App container">
        <Searchbar />
        <Errors />
        <RepositoryDetail/>
        <UserProfile />
        <LoaderContainer />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
