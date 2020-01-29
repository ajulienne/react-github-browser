import React from 'react';
import { fetchUserAndRepos } from '../../actions';
import { connect } from 'react-redux';

class Searchbar extends React.Component {

  state = {
    username: null
  };

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log('search')
    if (this.state.username) {
      this.props.searchProfile(this.state.username);
    }
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSearch}>
        <input type="text" placeholder="Github username" onChange={this.handleUsernameChange}/><input type="submit" value="Search" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  searchProfile: name => fetchUserAndRepos(name)
};

export default connect(null, mapDispatchToProps)(Searchbar);
