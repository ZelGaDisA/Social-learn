import React from "react";
import Content from "./Content";
import * as axios from 'axios'
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/content-reduser";




class ContentContainer extends React.Component {

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }



    render() {
        return (
           <Content {...this.props} />
        )
    }
}


let mapStateToProps = (state) => ({
    a:13
})


export default connect (mapStateToProps, {setUserProfile}) (ContentContainer);