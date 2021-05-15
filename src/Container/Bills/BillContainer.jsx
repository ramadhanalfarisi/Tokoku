import React, { Component } from 'react'
import { connect } from 'react-redux'
import BillComponent from '../../Component/Bills/BillComponent'

class BillContainer extends Component {

    componentDidMount(){
        this.props.handlePath(window.location.pathname)
    }

    render() {
        return (
            <div>
                <BillComponent title="Jono" desc="lorem ipsum sit amet" price="40000" date="2021-05-01 12:05:40"/>
                <BillComponent title="Joni" desc="lorem ipsum sit amet" price="30000" date="2021-05-01 12:05:40"/>
                <BillComponent title="Jona" desc="lorem ipsum sit amet" price="20000" date="2021-05-01 12:05:40"/>
                <BillComponent title="Jonu" desc="lorem ipsum sit amet" price="50000" date="2021-05-01 12:05:40"/>
                <BillComponent title="Jone" desc="lorem ipsum sit amet" price="10000" date="2021-05-01 12:05:40"/>
                <BillComponent title="Jino" desc="lorem ipsum sit amet" price="40000" date="2021-05-01 12:05:40"/>
                <BillComponent title="Jano" desc="lorem ipsum sit amet" price="45000" date="2021-05-01 12:05:40"/>
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