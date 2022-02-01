import React from "react";
import userPhoto from '../../assets/Photo.png';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img style={{ width: "75px", height: "75px" }}
                 src={user.photos.small != null
                     ? user.photos.small : userPhoto} alt="" />
          </NavLink>
        </div>
        <div>
          {user.followed
              ?
              <button disabled={followingInProgress
                  .some(id => id === user.id)}
                      onClick={() => { unfollow(user.id) }} >Unfollow</button>
              :
              <button disabled={followingInProgress
                  .some(id => id === user.id)}
                      onClick={() => { follow(user.id) }} >Follow</button>
          }

        </div>
      </span>
            <span>
        <span>
          <div>{user.name}</div>
          <div>{user.id}</div>
          <div>{user.status}</div>
        </span>
      </span>
        </div>
    )
}

export default User