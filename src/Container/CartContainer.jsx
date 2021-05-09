import React, { Component, Fragment } from 'react'
import CartProductComponent from '../Component/Cart/CartProductComponent'
import './CartContainer.css'

let total = 0;
export default class CartContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            order: [],
            total: 0
        }
    }


    componentDidMount() {
        let cart = localStorage.getItem("cart");
        if (cart !== "") {
            var jsonCart = JSON.parse(cart);
            if (jsonCart.length > 0) {
                this.setState({
                    order: jsonCart
                });
            }
        }
    }

    onHandleProduct = (item) => {
        total += parseInt(item.total)
        return (
            <CartProductComponent key={item.id_product} title={item.name_product} qty={item.qty} price={item.price_product} total={item.total} />
        );
    }


    render() {
        return (
            <Fragment>
                {/* <div className="header">
                    <h5>Checkout</h5>
                </div> */}
                <div className="container-checkout">
                    <div className="product-part">
                        {this.state.order.map((item, index) => {
                            return this.onHandleProduct(item);
                        })}
                    </div>
                    <div className="payment-part">
                        <div className="card-checkout2">
                            <h4>Detail Pembayaran</h4>
                            <hr />
                            <div className="total-detail">
                                <span className="label-payment">Total</span>
                                <p className="tot-cart">Rp {total.toLocaleString("id")}</p>
                            </div>
                            <div className="pay-detail">
                                <input type="text" className="cash" placeholder="Masukkan nominal uang" />
                            </div>
                            <div className="action-checkout">
                                <button className="btn-back">Kembali</button>
                                <button className="btn-pay">Bayar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}
