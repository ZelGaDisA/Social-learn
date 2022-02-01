import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusFunc from "./ProfileStatusFunc"
import userPhoto from "../../../assets/user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = formData => {
        saveProfile(formData).then(() => {setEditMode(false)})
    }

    return (
        <div className='infoColumn'>
            <div className='profilePhoto'>
                <img src={profile.photos.large || userPhoto}
                     alt=""/>
            </div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            <div className='personalInfo'>
                <div>
                    { editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={
                            () => setEditMode(true)
                        } profile={profile} isOwner={isOwner} />
                    }
                    <ProfileStatusFunc status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className="contact">
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            {isOwner && <div><button onClick={goToEditMode} >Edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob && <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts)
                .map(key => <Contact key={{key}} contactTitle={key} contactValue={profile.contacts[key]}/>)}
            </div>
        </>
    )
}

export default ProfileInfo