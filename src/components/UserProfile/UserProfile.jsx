import React from "react";
import PopularRepositories from "../PopularRepositories/PopularRepositories";
import UserDetail from "../UserDetail/UserDetail";

function UserProfile(props) {
  return (
    <div className="user-profile">
      <UserDetail />
      <PopularRepositories />
    </div>
  );
}

export default UserProfile;