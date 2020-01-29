import React, { Fragment } from "react";
import Repository from "../Repository/Repository";

function PopularRepositories(props) {
  return (
    <Fragment>
      {props.data.map(repo => {
        return <Repository data={repo} />
      })}
    </Fragment>
  );
}

export default PopularRepositories;