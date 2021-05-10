import React, { Component } from 'react'
import { connect } from 'react-redux'

class BillContainer extends Component {

    componentDidMount(){
        this.props.handlePath(window.location.pathname)
    }

    render() {
        return (
            <div>
                Bills
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

export default connect(mapStateToProps,mapDispatchToProps)(BillContainer)