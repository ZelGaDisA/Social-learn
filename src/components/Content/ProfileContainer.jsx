import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/content-reduser";




class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    



    render() {

        if (!this.props.isAuth) return <redirect to="/login"/>

        return (
           <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let AuthRedirectComponent = (props) => {
    
} 


let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {getUserProfile}) (ProfileContainer);