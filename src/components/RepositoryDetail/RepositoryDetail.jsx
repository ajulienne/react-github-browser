import React from "react";
import "./RepositoryDetail.css";
import { stringToColour, getContrast } from "../../utils/color";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock/CodeBlock';
import { b64DecodeUnicode } from "../../utils/number";

class RepositoryDetail extends React.Component {

    state = {
        dropdownClass: '',
        readmeContent: null
    };

    tagStyle = {
        backgroundColor: stringToColour(this.props.data.language || 'other'),
        color: getContrast(stringToColour(this.props.data.language || 'other'))
    };

    toggleDropdown = () => {
        console.log('toggledropdown');
        this.setState({dropdownClass : this.state.dropdownClass === '' ? 'is-active' : ''});
    }

    render() {
        return (
            <div className="box repository">
                <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h1 className="title"><a href={this.props.data.owner.html_url}>{this.props.data.owner.login}</a> / <a href={this.props.data.html_url}>{this.props.data.name}</a></h1>
                        <p>{this.props.data.description}</p>
                    </div>
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <span className="level-item tag" style={this.tagStyle}>{this.props.data.language || 'Other'}</span>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-code-branch"></i></span>{this.props.data.forks_count}&nbsp;Forks</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-balance-scale"></i></span>&nbsp;{this.props.data.license.name}</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <p><span className="icon lowered"><i className="fas fa-eye"></i></span>{this.props.data.subscribers_count}&nbsp;Subscribers</p>
                        </div>
                        <div className="level-item has-text-centered">
                            <div className={this.state.dropdownClass + ' dropdown'}>
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={this.toggleDropdown}>
                                    <span>Clone</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-item">
                                            <p><strong>HTTPS</strong> <code>{this.props.data.clone_url}</code></p>
                                        </div>
                                        <hr className="dropdown-divider" />
                                        <div className="dropdown-item">
                                            <p><strong>SSH</strong> <code>{this.props.data.ssh_url}</code></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <hr />
                    {this.props.data.readme && (
                        <ReactMarkdown 
                            renderers={{code: CodeBlock}}
                            escapeHtml={false}
                            className="content"
                            source={b64DecodeUnicode(this.props.data.readme)}
                        />
                    )}
                </div>
                </article>
            </div>
        );
    } 
}

export default RepositoryDetail;