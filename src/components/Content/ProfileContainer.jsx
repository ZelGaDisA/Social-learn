import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/content-reduser";
import {useParams} from "react-router";
import {compose} from "redux"

const ProfileContainer = (props) => {

  const {user_id} = useParams();

  useEffect(() => {
    let userId = user_id;
    if (!userId) {
      userId = props.authorizedUserId;
      if (!userId) {
        props.history.push("/login")
      }
    }
    if (!userId) return;
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [user_id, props]);

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

// import React from "react";
// import Profile from "./Profile";
// import { connect } from "react-redux";
// import { getUserProfile } from "../../redux/content-reduser";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { compose } from "redux";
// import { useParams } from "react-router";
// import { getStatus, updateStatus } from "../../redux/content-reduser";




// const ProfileContainer = (props) => {

//   const { user_id } = useParams();

//   useEffect(() => {
//     let userId = user_id;
//     if (!userId) {
//       userId = props.authorizedUserId;
//       if (!userId) {
//         props.history.push("/login")
//       }
//     }
//     if (!userId) return;
//     props.getUserProfile(userId);
//     props.getStatus(userId);
//     console.log("======> request")
//   }, [user_id]);


//   return (
//     <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
//   )
// }

// let mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   status: state.profilePage.status
// })


// export default compose(
//   withAuthRedirect,
//   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
// )(ProfileContainer);