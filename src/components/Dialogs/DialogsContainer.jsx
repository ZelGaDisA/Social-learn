import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs);


// <div className={ss.dialog + '' + ss.active}>
//                     <NavLink to="/dialogs/1">Dimych</NavLink>
//                 </div>

export default DialogsContainer;