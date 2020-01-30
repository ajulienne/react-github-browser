import React from "react";

class Dropdown extends React.Component {

    state = {
        dropdownClass: ''
    };

    toggleDropdown = () => {
        this.setState({dropdownClass : this.state.dropdownClass === '' ? 'is-active' : ''});
    }


    render() {
        return (
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
                            <p><strong>HTTPS</strong> <code>{this.props.clone_url}</code></p>
                        </div>
                        <hr className="dropdown-divider" />
                        <div className="dropdown-item">
                            <p><strong>SSH</strong> <code>{this.props.ssh_url}</code></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dropdown;