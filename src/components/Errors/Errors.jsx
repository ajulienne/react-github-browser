import React from "react";
import { connect } from "react-redux";

const Errors = props => {

    let errorNodes = [];

    for (let [key, value] of Object.entries(props.errors)) {
        if (value) {
            let msg;
            if (value.status === 404) {
                msg = `${key.replace(/^\w/, c => c.toUpperCase())} not found.`
            } else {
                msg = `Error while fetching ${key}.`
            }
            errorNodes.push(<div className="notification is-danger" key={key}>{msg}</div>)
        }
    }

    return errorNodes.map(n => n);
}

const mapStateToProps = state => {
    return {
        errors: {
            user: state.user.error,
            repositories: state.repositories.error,
            repository: state.repository.error
        }
    };
}

export default connect(mapStateToProps)(Errors);