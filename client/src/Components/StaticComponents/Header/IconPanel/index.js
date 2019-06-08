import React, {Component} from 'react';

/* Module */
import {Link} from "react-router-dom";

/* Component*/
import ModalSettings from "../../Modal/Settings";

/* Icon */
import SearchIcon from "@material-ui/icons/Search";
import ModalBugReport from "../../Modal/BugReport";
import SettingsIcon from '@material-ui/icons/Settings';

/* Redux */
import {connect} from 'react-redux';
import {openModal, closeModal} from "../../../../Store/Actions/actionModal";
import {bindActionCreators} from 'redux';

class IconPanel extends Component {

    state = {
        modalBug: false,
        modalSettings: false,
    };

    render() {
        const {user} = this.props;
        const {modalBug, modalSettings} = this.state;
        return (
            <div className="header__icon_panel">
                <ModalSettings openModal={modalSettings} fnClose={() => this.setState({modalSettings: false})}/>
                <ModalBugReport openModal={modalBug} fnClose={() => this.setState({modalBug: false})}/>

                <Link to="/search" className="header__search_icon">
                    <SearchIcon/>
                </Link>

                <div className="header__search_icon" onClick={() => this.setState({modalSettings: true})}>
                    <SettingsIcon/>
                </div>

                <div className="header__search_icon" onClick={() => this.setState({modalBug: true})}>
                    <svg viewBox="-40 1 511 511.99975" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m418.527344 61.820312c-1.273438-.171874-127.230469-18.210937-180.101563-50.777343l-14.207031-8.757813c-4.960938-3.046875-11.199219-3.046875-16.15625 0l-14.21875 8.757813c-52.808594 32.539062-178.820312 50.605469-180.09375 50.777343-7.59375 1.078126-13.25 7.578126-13.25 15.246094v213.433594c0 121.726562 95.785156 221.5 215.640625 221.5 119.582031 0 215.640625-99.464844 215.640625-221.5v-213.433594c0-7.667968-5.65625-14.175781-13.253906-15.246094zm-17.542969 228.679688c0 105.492188-82.753906 190.707031-184.84375 190.707031-101.917969 0-184.847656-85.558593-184.847656-190.707031v-200.226562c35.199219-5.734376 130.691406-23.433594 178.710937-53.015626l6.136719-3.777343 6.136719 3.777343c48.019531 29.582032 143.511718 47.269532 178.707031 53.015626zm0 0"/>
                        <path
                            d="m190.222656 102.671875-12.289062-18.011719c-4.792969-7.027344-14.375-8.835937-21.398438-4.042968-7.023437 4.792968-8.832031 14.371093-4.039062 21.398437l14.230468 20.859375s0 0-.003906 0c-6.578125 9.621094-10.4375 21.238281-10.4375 33.75v8.253906c-21.542968 7.402344-37.691406 26.523438-40.78125 49.714844h-29.328125c-8.503906 0-15.394531 6.890625-15.394531 15.394531 0 8.503907 6.890625 15.398438 15.394531 15.398438h28.785157v25.636719h-28.785157c-8.503906 0-15.394531 6.894531-15.394531 15.398437 0 8.5 6.890625 15.394531 15.394531 15.394531h28.785157v25.636719h-28.785157c-8.503906 0-15.394531 6.894531-15.394531 15.398437 0 8.503907 6.890625 15.398438 15.394531 15.398438h32.007813c11.28125 43.550781 50.921875 75.8125 97.957031 75.8125 47.03125 0 86.671875-32.261719 97.953125-75.8125h32.007812c8.503907 0 15.398438-6.894531 15.398438-15.398438 0-8.503906-6.894531-15.398437-15.398438-15.398437h-28.78125v-25.636719h28.78125c8.503907 0 15.398438-6.894531 15.398438-15.394531 0-8.503906-6.894531-15.398437-15.398438-15.398437h-28.78125c0-4.039063 0-12.601563 0-25.636719h28.78125c8.503907 0 15.398438-6.894531 15.398438-15.398438 0-8.503906-6.894531-15.394531-15.398438-15.394531h-29.328124c-3.089844-23.199219-19.234376-42.3125-40.78125-49.714844v-8.253906c0-12.511719-3.859376-24.128906-10.4375-33.75 0 0 0 0-.003907 0l14.234375-20.859375c4.792969-7.023437 2.984375-16.605469-4.042968-21.398437-7.023438-4.792969-16.601563-2.984376-21.394532 4.042968l-12.292968 18.011719c-16.285157-7.855469-35.414063-7.914063-51.832032 0zm54.976563 53.953125v4.957031h-58.117188v-4.957031c0-16.03125 13.035157-29.070312 29.058594-29.070312s29.058594 13.039062 29.058594 29.070312zm-99.445313 176.246094v-57.277344h54.988282v125.96875c-31.429688-7.03125-54.988282-35.15625-54.988282-68.691406zm140.769532 0c0 33.535156-23.554688 61.660156-54.984376 68.691406v-125.96875h54.984376zm0-110.160156v22.089843h-140.769532v-22.082031c0-16.777344 13.675782-30.339844 30.355469-30.339844h80.0625c16.679687 0 30.351563 13.566406 30.351563 30.332032zm0 0"/>
                    </svg>
                </div>


                {!user._id ?
                    <div>
                        <Link to="/signin">
                            <button className="sign_in_btn">Вход</button>
                        </Link>
                        <Link to="/signup">
                            <button className="blue_button sign_up_btn">Регистрация</button>
                        </Link>
                    </div>
                    :
                    <div className="flex h_auth_user">
                        <Link to="/chat">
                            <button className="sign_in_btn">Написать</button>
                        </Link>
                        <Link to="/profile" className="h_user_photo">
                            <img src={user.photo} alt="userIcon"/>
                        </Link>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bugReport: state.modal.bugReport,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: bindActionCreators(openModal, dispatch),
        closeModal: bindActionCreators(closeModal, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IconPanel);