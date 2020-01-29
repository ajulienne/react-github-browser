import React, { Fragment } from "react";
import Repository from "../Repository/Repository";

function PopularRepositories(props) {
  return (
    <Fragment>
      {props.data.map((repo, key) => {
        return <Repository key={key} data={repo} />
      })}
    </Fragment>
  );
}

export default PopularRepositories;