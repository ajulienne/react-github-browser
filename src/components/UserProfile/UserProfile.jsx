import React from "react";
import PopularRepositories from "../PopularRepositories/PopularRepositories";
import UserDetail from "../UserDetail/UserDetail";
import { connect } from "react-redux";

function UserProfile(props) {
  return (
    <div className="user-profile">
      { props.user.data && <UserDetail data={props.user.data} /> }
      { props.repositories.data && <PopularRepositories data={props.repositories.data} /> }
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(UserProfile);
