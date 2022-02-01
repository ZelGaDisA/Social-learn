import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/content-reduser";
import {compose} from "redux"
import {useParams} from "react-router";

const ProfileContainer = ({onPageChanged, getStatus, authorizedUserId, getUserProfile, ...props}) => {
  const {user_id} = useParams();

  useEffect(() => {
    let userId = user_id;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        props.history && props.history.push("/login")
      }
    }
    if (!userId) return;

    getUserProfile(userId);
    getStatus(userId);
  }, [user_id, getUserProfile, getStatus, authorizedUserId]);

  return (
      <Profile {...props}
               isOwner={!user_id}
               profile={props.profile}
               status={props.status}
               updateStatus={props.updateStatus}
               savePhoto={props.savePhoto}
      />
  )
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile})
)(ProfileContainer)




