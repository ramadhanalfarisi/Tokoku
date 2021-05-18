import React, { Component } from 'react'
import { connect } from 'react-redux'
import imageMessi from '../../assets/images/messi.jpeg'
import './AccountContainer.css'

class AccountContainer extends Component {

    componentDidMount(){
        this.props.handlePath(window.location.pathname)
    }


    render() {
        return (
            <div className="account-container">
                <div className="img-profile-container">
                    <img src={imageMessi} alt="" id="img-profile"/>
                    <button className="btn-change-img">change avatar</button>
                </div>
                <p>Name</p>
                <div className="row">
                    <input type="text" className="name" id="firstname"/>
                    <input type="text" className="name" id="lastname"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        path : state.path,
        title: state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePath: (value) => dispatch({ type: 'HANDLE_PATH', value : value})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountContainer)