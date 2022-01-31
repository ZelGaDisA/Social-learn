import React, { useEffect, useState } from "react";

const ProfileStatusFunc = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {!editMode ?
        <div>
          <b>Status: </b>
          <span onClick={activateEditMode} >{props.status || "empty status"}</span>
        </div>
        :
        <div>
          <b>Status: </b><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>}
    </div>
  )
}

export default ProfileStatusFunc