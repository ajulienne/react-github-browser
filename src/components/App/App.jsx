import React, { Fragment } from 'react';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import Searchbar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';
import Hero from '../Hero/Hero';
import './App.css';
import Footer from '../Footer/Footer';
import RepositoryDetail from '../RepositoryDetail/RepositoryDetail';
import Errors from '../Errors/Errors';
import LoaderWrapper from '../LoaderWrapper/LoaderWrapper';

const App = () => {
  return (
    <Fragment>
      <Hero />
      <div className="App container">
        <HashRouter>
          <Searchbar />
          <Errors />
          <Switch>
            <Route path="/:githubLogin/:repoName" render={(props) => (
              <RepositoryDetail key={props.match.params.githubLogin + '/' + props.match.params.repoName} {...props} />
            )} />
            <Route path="/:githubLogin" render={(props) => (
              <UserProfile key={props.match.params.githubLogin} {...props} />
            )} />
          </Switch>
        </HashRouter>
        <LoaderWrapper />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
