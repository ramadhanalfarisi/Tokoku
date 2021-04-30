import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CartContainer from './CartContainer'
import ProductContainer from './ProductContainer'

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
                    <div>
                        <Route path="/cart" component={CartContainer} />
                        <Route path="/" exact component={ProductContainer} />
                    </div>
                </Fragment>
            </BrowserRouter>

        )
    }
}
