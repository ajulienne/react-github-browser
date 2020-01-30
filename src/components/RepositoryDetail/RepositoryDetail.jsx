import React from "react";
import "./RepositoryDetail.css";
import { stringToColour, getContrast } from "../../utils/color";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock/CodeBlock';
import { b64DecodeUnicode } from "../../utils/number";
import Dropdown from "../Dropdown/Dropdown";

export const RepositoryDetail = props => {

    const tagStyle = {
        backgroundColor: stringToColour(props.data.language || 'other'),
        color: getContrast(stringToColour(props.data.language || 'other'))
    };

    return (
        <div className="box repository">
            <article className="media">
            <div className="media-content">
                <div className="content">
                    <h1 className="title"><a href={props.data.owner.html_url}>{props.data.owner.login}</a> / <a href={props.data.html_url}>{props.data.name}</a></h1>
                    <p>{props.data.description}</p>
                </div>
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <span className="level-item tag" style={tagStyle}>{props.data.language || 'Other'}</span>
                    </div>
                    <div className="level-item has-text-centered">
                        <p><span className="icon lowered"><i className="fas fa-code-branch"></i></span>{props.data.forks_count}&nbsp;Forks</p>
                    </div>
                    <div className="level-item has-text-centered">
                        <p><span className="icon lowered"><i className="fas fa-balance-scale"></i></span>&nbsp;{props.data.license.name}</p>
                    </div>
                    <div className="level-item has-text-centered">
                        <p><span className="icon lowered"><i className="fas fa-eye"></i></span>{props.data.subscribers_count}&nbsp;Subscribers</p>
                    </div>
                    <div className="level-item has-text-centered">
                        <Dropdown clone_url={props.data.clone_url} ssh_url={props.data.ssh_url} />
                    </div>
                </nav>
                <hr />
                {props.data.readme && (
                    <ReactMarkdown 
                        renderers={{code: CodeBlock}}
                        escapeHtml={false}
                        className="content"
                        source={b64DecodeUnicode(props.data.readme)}
                    />
                )}
            </div>
            </article>
        </div>
    );
}

export default RepositoryDetail;