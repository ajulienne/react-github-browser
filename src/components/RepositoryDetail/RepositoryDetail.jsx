import React, { Fragment } from "react";
import "./RepositoryDetail.css";
import { stringToColour, getContrast } from "../../utils/color";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock/CodeBlock';
import { b64DecodeUnicode } from "../../utils/number";
import Dropdown from "../Dropdown/Dropdown";
import { connect } from "react-redux";
import { fetchUserRepository } from "../../actions";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";

class RepositoryDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.tagStyle = {
            backgroundColor: stringToColour(props.repo?.language || 'other'),
            color: getContrast(stringToColour(props.repo?.language || 'other'))
        };
    }

    componentDidMount() {
        this.props.fetch(this.props.match.params.githubLogin, this.props.match.params.repoName);
    }

    render() {
        return (
            <Fragment>
                { this.props.repo !== null && <div className="box repository">
                    <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <h1 className="title"><Link className="thinner" to={'/' + this.props.repo.owner.login}>{this.props.repo.owner.login}</Link> / {this.props.repo.name}</h1>
                            <p>{this.props.repo.description}</p>
                        </div>
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <span className="level-item tag" style={this.tagStyle}>{this.props.repo.language || 'Other'}</span>
                            </div>
                            <div className="level-item has-text-centered">
                                <p><span className="icon lowered"><i className="fas fa-code-branch"></i></span>{this.props.repo.forks_count}&nbsp;Forks</p>
                            </div>
                            <div className="level-item has-text-centered">
                                <p><span className="icon lowered"><i className="fas fa-balance-scale"></i></span>&nbsp;{this.props.repo.license.name}</p>
                            </div>
                            <div className="level-item has-text-centered">
                                <p><span className="icon lowered"><i className="fas fa-eye"></i></span>{this.props.repo.subscribers_count}&nbsp;Subscribers</p>
                            </div>
                            <div className="level-item has-text-centered">
                                <Dropdown clone_url={this.props.repo.clone_url} ssh_url={this.props.repo.ssh_url} />
                            </div>
                        </nav>
                        <hr />
                        {this.props.repo.readme && (
                            <ReactMarkdown
                                renderers={{code: CodeBlock}}
                                escapeHtml={false}
                                className="content"
                                source={b64DecodeUnicode(this.props.repo.readme)}
                            />
                        )}
                    </div>
                    </article>
                </div> }
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        repo: state.repository.data
    }
}

const mapDispatchToProps = {
    fetch: (githubLogin, repoName) => fetchUserRepository(githubLogin, repoName)
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(RepositoryDetail);