import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: 0
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className={this.props.modshow === true ? "back-dark" : "back-transparent"}>
                    </div>
                    <SideBarComponent />
                    <div className="part-2">
                        <TopBarComponent />
                        <div className="route">
                            <Route path="/cart" component={CartContainer} />
                            <Route path="/" exact component={DashboardContainer} />
                            <Route path="/food" component={ProductContainer} />
                            <Route path="/account" component={AccountContainer} />
                            <Route path="/settings" component={SettingContainer} />
                            <Route path="/bills" component={BillContainer} />
                        </div>
                    </div>
                    <ModifierComponent />
                </Fragment>
            </BrowserRouter>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        modshow : state.modshow
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleMod : (value) => dispatch({type : 'HANDLE_MOD', value:value})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer) 