import React from "react";

function UserDetail(props) {
  return (
    <ul>
        <li>{props.data.name} ({props.data.login}) / {props.data.type}</li>
        <li>{props.data.location}</li>
        <li>{props.data.company}</li>
        <li>{props.data.blog}</li>
        <li>{props.data.bio}</li>
    </ul>
  );
}

export default UserDetail;