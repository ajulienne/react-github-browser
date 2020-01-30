import React, { Fragment } from 'react';
import Searchbar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';
import Hero from '../Hero/Hero';
import './App.css';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import RepositoryDetail from '../RepositoryDetail/RepositoryDetail';
import Loader from '../Loader/Loader';

const App = props => {
  return (
    <Fragment>
      <Hero />
      <div className="App container">
        <Searchbar />
        { props.repository.loading && <div style={{textAlign: 'center'}}><Loader /></div> }
        <RepositoryDetail repo={props.repository} />
        <UserProfile />
      </div>
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);
