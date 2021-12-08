import React from "react";
import styles from './users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

    getUsers = () => {
        if (props.users.lenght === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }


    render() {
        return (<div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.sity"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
    }
}

export default Users;