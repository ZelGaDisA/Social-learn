import React from "react";
import User from "./User"
import Paginator from "../common/Paginator/Paginator"


const Users = ({ currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props }) => {

    return (
        <div>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} onPageChanged={onPageChanged} pageSize={pageSize} />
            <div>
                { users.map(u => <User
                        user={u}
                        key={u.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                ) }
            </div>
        </div>
    )
}

export default Users

