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

export default class HomeContainer extends Component {
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
                </Fragment>
            </BrowserRouter>

        )
    }
}
