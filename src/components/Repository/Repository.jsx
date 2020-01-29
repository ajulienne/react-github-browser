import React from "react";

function Repository(props) {
  return (
    <ul>
      <li><a href={props.data.html_url}>{props.data.name}</a></li>
      <li>{props.data.language}</li>
      <li>{props.data.description}</li>
    </ul>
  );
}

export default Repository;