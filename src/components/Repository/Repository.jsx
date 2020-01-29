import React, { Fragment } from "react";
import { stringToColour, getContrast } from "../../utils/color";

function Repository(props) {

  const tagStyle = {
    backgroundColor: stringToColour(props.data.language || 'other'),
    color: getContrast(stringToColour(props.data.language || 'other'))
  };

  return (
    <div className="tile is-parent is-6 is-vertical">
      <div className="tile is-child box">
        <article className="media">
          <div className="media-content">
          <div className="content">
            <p>
              <strong><a href={props.data.html_url}>{props.data.name}</a></strong><br />
              {props.data.description}
            </p>
          </div>
          <nav className="level is-desktop">
            <div className="level-left">
              <span className="level-item tag" style={tagStyle}>{props.data.language || 'Other'}</span>
              { props.data.forks_count > 0 && (
              <Fragment>
                <span className="icon"><i className="fas fa-code-branch"></i></span>
                <span>{props.data.forks_count}</span>
              </Fragment>
              ) }
            </div>
          </nav>
          </div>
          
        </article>
      </div>
    </div>
  );
}

export default Repository;