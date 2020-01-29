import React from "react";
import './UserDetail.css';
import { abbreviateNumber } from "../../utils/number";

function UserDetail(props) {

  let listEntries = [];
  if (props.data.location) {
    listEntries.push({icon: "fas fa-map-marker-alt", node: props.data.location});
  }
  if (props.data.company) {
    listEntries.push({icon: "fas fa-building", node: props.data.company});
  }
  if (props.data.blog) {
    listEntries.push({icon: "fas fa-link", node: <a href={props.data.blog}>{props.data.blog}</a>});
  }


  return (
    <div className="columns is-desktop user-detail is-vcentered">
      <div className="column is-one-third">
        <div className="columns">
          <div className="column is-one-quarter">
          <img className="avatar" src={props.data.avatar_url} alt="github avatar"/>
          </div>
          <div className="column">
            <h1 className="title"><a href={props.data.html_url}>{props.data.name}</a></h1>
            <h2 className="subtitle">{props.data.login}</h2>
          </div>
        </div>
        <div className="content">
          <ul className="without-style">
            {listEntries.map((el, key) => <li key={key}><span className="icon"><i className={el.icon}></i></span>{el.node}</li>)}
          </ul>
          {props.data.blog && (<p>
            {props.data.bio}
          </p>)}
        </div>
      </div>
      <div className="column">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Repositories</p>
          <p className="title">{abbreviateNumber(props.data.public_repos)}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">{abbreviateNumber(props.data.following)}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">{abbreviateNumber(props.data.followers)}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Gists</p>
            <p className="title">{abbreviateNumber(props.data.public_gists)}</p>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default UserDetail;