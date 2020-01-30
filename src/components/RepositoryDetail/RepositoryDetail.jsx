import React, { Fragment } from "react";
import "./RepositoryDetail.css";
import { stringToColour, getContrast } from "../../utils/color";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock/CodeBlock';
import { b64DecodeUnicode } from "../../utils/number";
import Dropdown from "../Dropdown/Dropdown";

export const RepositoryDetail = props => {

    const tagStyle = {
        backgroundColor: stringToColour(props.repo.data?.language || 'other'),
        color: getContrast(stringToColour(props.repo.data?.language || 'other'))
    };

    let errorNode;
    if (props.repo.error?.status === 404) {
        errorNode = <div className="notification is-danger" >Repository not found.</div>
    } else if (props.repo.error) {
        errorNode = <div className="notification is-danger" >Error while fetching repository.</div>
    }

    return (
        <Fragment>
            {errorNode}
            { props.repo.data !== null && <div className="box repository">
                <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h1 className="title"><a href={props.repo.data.owner.html_url}>{props.repo.data.owner.login}</a> / <a href={props.repo.data.html_url}>{props.repo.data.name}</a></h1>
                        <p>{props.repo.data.description}</p>
                    </div>
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <span className="level-item tag" style={tagStyle}>{props.repo.data.language || 'Other'}</span>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-code-branch"></i></span>{props.repo.data.forks_count}&nbsp;Forks</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-balance-scale"></i></span>&nbsp;{props.repo.data.license.name}</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-eye"></i></span>{props.repo.data.subscribers_count}&nbsp;Subscribers</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <Dropdown clone_url={props.repo.data.clone_url} ssh_url={props.repo.data.ssh_url} />
                        </div>
                    </nav>
                    <hr />
                    {props.repo.data.readme && (
                        <ReactMarkdown 
                            renderers={{code: CodeBlock}}
                            escapeHtml={false}
                            className="content"
                            source={b64DecodeUnicode(props.repo.data.readme)}
                        />
                    )}
                </div>
                </article>
            </div> }
        </Fragment>
    );
}

export default RepositoryDetail;