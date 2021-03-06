import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import SideBarComponent from '../../Component/Home/SideBarComponent'
import './HomeContainer.css'
import TopBarComponent from '../../Component/Home/TopBarComponent'
import CartContainer from '../Cart/CartContainer'
import ProductContainer from '../Product/ProductContainer'
import DashboardContainer from '../Dashboard/DashboardContainer'
import AccountContainer from '../Account/AccountContainer'
import SettingContainer from '../Settings/SettingContainer'
import BillContainer from '../Bills/BillContainer'
import ModifierComponent from '../../Component/Product/ModifierComponent'
import { connect } from 'react-redux'
import LoginContainer from '../Login/LoginContainer'
import RegisterContainer from '../Register/RegisterContainer'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: 0,
            tokenUser: null
        }
    }

    componentDidMount() {
        var token = localStorage.getItem("token")
        this.setState({
            tokenUser: token
        });
    }

    handleModifier = () => {
        this.props.handleMod(false, "");
    }

    render() {
        return (
            <BrowserRouter>
                {this.state.tokenUser != null ?
                    <Fragment>
                        <div className={this.props.modshow === true ? "back-dark" : "back-transparent"} onClick={() => this.handleModifier()}>
                        </div>
                        <SideBarComponent />
                        <div className="part-2">
                            <TopBarComponent />
                            <div className="route">
                                <Route path="/cart" exact component={CartContainer} />
                                <Route path="/dashboard" exact component={DashboardContainer} />
                                <Route path="/food" exact component={ProductContainer} />
                                <Route path="/account" exact component={AccountContainer} />
                                <Route path="/settings" exact component={SettingContainer} />
                                <Route path="/bills" exact component={BillContainer} />
                                <Redirect to="/dashboard" />
                            </div>
                        </div>
                        <ModifierComponent />
                    </Fragment>
                    :
                    <Fragment>
                        <Route path="/" exact component={LoginContainer} />
                        <Route path="/register" exact component={RegisterContainer} />
                        <Redirect to="/" />
                    </Fragment>
                }

            </BrowserRouter>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        modshow: state.modshow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMod: (value, data) => dispatch({ type: 'HANDLE_MOD', value: value, data: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)