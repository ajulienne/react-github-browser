import React, { Fragment } from 'react';
import { fetchUserAndRepos, fetchUserRepository } from '../../actions';
import { connect } from 'react-redux';
import './SearchBar.css';
import { Redirect } from 'react-router-dom';

class Searchbar extends React.Component {

  state = {
    query: null,
    redirect: null
  };

  handleQueryChange = (e) => {
    this.setState({query: e.target.value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.query) {
      const split = this.state.query.split('/');
      if (split.length === 2 && !split[1]) {
        split.pop();
      }
      if (split.length > 2) {// wrong
        // TODO error
      } else if (split.length === 2) {
        this.setState({redirect:`/${split[0]}/${split[1]}`});
      } else {
        this.setState({redirect:`/${split[0]}`});
      }
    }
  }

  render() {

    return (
      <Fragment>
      {this.state.redirect && <Redirect to={this.state.redirect} />}
      <form className="search-bar" onSubmit={this.handleSearch}>
        <div className="field has-addons">
          <div className="control has-icons-left is-expanded">
            <input type="text" className="input is-large" placeholder="e.g. github or reduxjs/redux" onChange={this.handleQueryChange}/>
            <span className="icon is-medium is-left">
              <i className="fab fa-github fa-lg"></i>
            </span>
          </div>
          <div className="control">
            <input className="button is-large is-primary" type="submit" value="Search" />
          </div>
        </div>
      </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  searchProfile: name => fetchUserAndRepos(name),
  searchRepository: (login, repo) => fetchUserRepository(login, repo)
};

export default connect(null, mapDispatchToProps)(Searchbar);
