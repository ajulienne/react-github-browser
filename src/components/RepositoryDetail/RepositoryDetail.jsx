import React, { Fragment } from "react";
import "./RepositoryDetail.css";
import { stringToColour, getContrast } from "../../utils/color";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock/CodeBlock';
import { b64DecodeUnicode } from "../../utils/number";
import Dropdown from "../Dropdown/Dropdown";
import { connect } from "react-redux";

export const RepositoryDetail = props => {

    const tagStyle = {
        backgroundColor: stringToColour(props.repo?.language || 'other'),
        color: getContrast(stringToColour(props.repo?.language || 'other'))
    };

    return (
        <Fragment>
            { props.repo !== null && <div className="box repository">
                <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h1 className="title"><a href={props.repo.owner.html_url}>{props.repo.owner.login}</a> / <a href={props.repo.html_url}>{props.repo.name}</a></h1>
                        <p>{props.repo.description}</p>
                    </div>
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <span className="level-item tag" style={tagStyle}>{props.repo.language || 'Other'}</span>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-code-branch"></i></span>{props.repo.forks_count}&nbsp;Forks</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-balance-scale"></i></span>&nbsp;{props.repo.license.name}</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-eye"></i></span>{props.repo.subscribers_count}&nbsp;Subscribers</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <Dropdown clone_url={props.repo.clone_url} ssh_url={props.repo.ssh_url} />
                        </div>
                    </nav>
                    <hr />
                    {props.repo.readme && (
                        <ReactMarkdown 
                            renderers={{code: CodeBlock}}
                            escapeHtml={false}
                            className="content"
                            source={b64DecodeUnicode(props.repo.readme)}
                        />
                    )}
                </div>
                </article>
            </div> }
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        repo: state.repository.data
    }
}

export default connect(mapStateToProps)(RepositoryDetail);