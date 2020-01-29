import React from "react";
import PopularRepositories from "../PopularRepositories/PopularRepositories";
import UserDetail from "../UserDetail/UserDetail";
import { connect } from "react-redux";

function UserProfile(props) {

  let userDetailNode;
  if (props.user.loading) {
    userDetailNode = <p>Loading user details...</p>;
  } else if (props.user.data) {
    userDetailNode = <UserDetail data={props.user.data} />;
  }

  let repositoriesNode;
  if (props.repositories.loading) {
    repositoriesNode = <p>Loading recently updated repositories...</p>;
  } else if (props.repositories.data) {
    repositoriesNode = <PopularRepositories data={props.repositories.data} />;
  }

  let errors = [];
  if (props.user.error) {
    errors.push(props.user.error.status === 404 ? "User not found." : "Error while fetching user data.");
  }
  if (props.repositories.error) {
    errors.push(props.repositories.error.status === 404 ? "User doesn't have any repository?" : "Error while fetching repository data.");
  }

  return (
    <div className="user-profile">
      { errors.length > 0 && (
        <div className="errors">
          { errors.map(msg => <p>{msg}</p>) }
      </div>
      )}
      { userDetailNode }
      { repositoriesNode }
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(UserProfile);
