import React, { Component } from 'react'
import './CartProductComponent.css'

export default class CartProductComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : props.title,
            qty : props.qty,
            price : props.price,
            total: props.total
        }
    }

    render() {
        return (
            <div className="card-checkout">
                <img src="https://www.masakapahariini.com/wp-content/uploads/2019/01/nasi-goreng-jawa-500x300.jpg" alt="" />
                <div className="detail-checkout">
                    <p className="title-checkout">{this.state.title}</p>
                    <span className="desc-checkout">{this.state.qty} x Rp. {parseInt(this.state.price.replaceAll('.','')).toLocaleString("id")}</span>
                    <div className="action-product-checkout">
                        <button className="plus">+</button>
                        <button className="min">-</button>
                    </div>
                </div>
                <span className="total-checkout">Rp {parseInt(this.state.total).toLocaleString("id")}</span>
            </div>
        )
    }
}
