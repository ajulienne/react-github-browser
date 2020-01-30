import React from 'react';
import { fetchUserAndRepos, fetchUserRepository } from '../../actions';
import { connect } from 'react-redux';
import './SearchBar.css';

class Searchbar extends React.Component {

  state = {
    query: null
  };

  handleQueryChange = (e) => {
    this.setState({query: e.target.value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.query) {

      const split = this.state.query.split('/');
      if (split.length > 2) {// wrong
        // TODO error
      } else if (split.length === 2) {
        this.props.searchRepository(split[0], split[1]);
      } else {
        this.props.searchProfile(this.state.query);
      }
    }
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSearch}>
        <div className="field has-addons">
          <div className="control has-icons-left is-expanded">
            <input type="text" className="input is-large" placeholder="e.g. github or reduxjs/redux" onChange={this.handleQueryChange}/>
            <span className="icon is-medium is-left">
              <i className="fab fa-github fa-lg"></i>
            </span>
          </div>
          <div className="control">
            <input className="button is-large is-info" type="submit" value="Search" />
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  searchProfile: name => fetchUserAndRepos(name),
  searchRepository: (login, repo) => fetchUserRepository(login, repo)
};

export default connect(null, mapDispatchToProps)(Searchbar);
