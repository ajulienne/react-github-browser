import React from "react";
import Repository from "../Repository/Repository";
import './PopularRepositories.css';

function PopularRepositories(props) {
  return (
    <div className="tile is-ancestor wrap repositories">
      {props.data.map((repo, key) => {
        return <Repository key={key} data={repo} />
      })}
    </div>
  );
}

export default PopularRepositories;