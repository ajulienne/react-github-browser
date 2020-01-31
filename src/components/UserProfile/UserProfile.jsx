import React from "react";
import PopularRepositories from "../PopularRepositories/PopularRepositories";
import UserDetail from "../UserDetail/UserDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserAndRepos } from "../../actions";
import { compose } from "redux";

class UserProfile extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetch(this.props.match.params.githubLogin);
  }

  render() {
    return (
      <div className="user-profile">
        { this.props.user.data && <UserDetail data={this.props.user.data} /> }
        { this.props.repositories.data && <PopularRepositories data={this.props.repositories.data} /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {
  fetch: login => fetchUserAndRepos(login)
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserProfile);
