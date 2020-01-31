import React from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

const LoaderContainer = props => {
    return (props.loading.user || props.loading.repositories || props.loading.repository) && <div class="loader" style={{textAlign: 'center'}}><Loader /></div>;
}

const mapStateToProps = state => {
    return {
        loading: {
            user: state.user.loading,
            repositories: state.repositories.loading,
            repository: state.repository.loading,
        }
    }
};

export default connect(mapStateToProps)(LoaderContainer);