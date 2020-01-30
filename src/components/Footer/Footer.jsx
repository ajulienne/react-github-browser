import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Made by <a href="https://github.com/ajulienne">Antoine Julienne</a> with <strong>React</strong> and <strong>Redux</strong>.<br />
          View source on <a href="https://github.com/ajulienne/react-github-profiles"><span className="icon" style={{position: "relative", top: "3px"}}><i className="fab fa-github-alt"></i></span>Github</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;