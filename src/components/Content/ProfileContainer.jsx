import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/content-reduser";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useParams } from "react-router";




const ProfileContainer = (props) => {


    const pageNum = useParams()
    const pageNumPick = (pageNum) => {
      for (let key in pageNum) {
        return pageNum[key]
      }
    }

    let userId = pageNumPick(pageNum)
    if (!userId) {
      userId = 21229
    }

    props.getUserProfile(userId);
    props.getUserStatus(userId);
  
    return (
           <Profile {...props} profile={props.profile} />
        )
}

let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    status: state.profilePage.status
})


export default compose(
    withAuthRedirect,
    connect (mapStateToProps, {getUserProfile})
)(ProfileContainer);