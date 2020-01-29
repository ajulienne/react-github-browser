import React from 'react';
import { fetchUserAndRepos } from '../../actions';
import { connect } from 'react-redux';
import './SearchBar.css';

class Searchbar extends React.Component {

  state = {
    username: null
  };

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.username) {
      this.props.searchProfile(this.state.username);
    }
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSearch}>
        <div className="field has-addons">
          <div className="control has-icons-left is-expanded">
            <input type="text" className="input is-large" placeholder="Github username" onChange={this.handleUsernameChange}/>
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
  searchProfile: name => fetchUserAndRepos(name)
};

export default connect(null, mapDispatchToProps)(Searchbar);
