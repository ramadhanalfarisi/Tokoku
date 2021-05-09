import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SideBarComponent from '../Component/Home/SideBarComponent'
import CartContainer from './CartContainer'
import ProductContainer from './ProductContainer'
import './HomeContainer.css'
import TopBarComponent from '../Component/Home/TopBarComponent'

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
                            <Route path="/" exact component={ProductContainer} />
                        </div>
                    </div>
                </Fragment>
            </BrowserRouter>

        )
    }
}
