import React, { Component, Fragment } from 'react'
import './CartContainer.css'

export default class CartContainer extends Component {

    state = {
        order: []
    }


    render() {
        return (
            <Fragment>
                <div className="header">
                    <h5>Checkout</h5>
                </div>
                <div className="container-checkout">
                    <div className="product-part">
                        <div className="card-checkout">
                            <img src="https://www.masakapahariini.com/wp-content/uploads/2019/01/nasi-goreng-jawa-500x300.jpg" alt="" />
                            <div className="detail-checkout">
                                <p className="title-checkout">Nasi Goreng</p>
                                <span className="desc-checkout">2 x Rp. 10.000</span>
                            </div>
                            <span className="total-checkout">Rp 20.000</span>
                        </div>
                        <div className="card-checkout">
                            <img src="https://www.masakapahariini.com/wp-content/uploads/2019/01/nasi-goreng-jawa-500x300.jpg" alt="" />
                            <div className="detail-checkout">
                                <p className="title-checkout">Nasi Goreng</p>
                                <span className="desc-checkout">2 x Rp. 10.000</span>
                            </div>
                            <span className="total-checkout">Rp 20.000</span>
                        </div>
                        <div className="card-checkout">
                            <img src="https://www.masakapahariini.com/wp-content/uploads/2019/01/nasi-goreng-jawa-500x300.jpg" alt="" />
                            <div className="detail-checkout">
                                <p className="title-checkout">Nasi Goreng</p>
                                <span className="desc-checkout">2 x Rp. 10.000</span>
                            </div>
                            <span className="total-checkout">Rp 20.000</span>
                        </div>
                    </div>
                    <div className="payment-part"></div>
                </div>
            </Fragment>

        )
    }
}
